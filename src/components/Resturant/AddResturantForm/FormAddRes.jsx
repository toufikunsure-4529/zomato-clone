import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import dbServices from "../../../appwrite/DBconfig";
import Button from "../../Button";
import Input from "../../Input";

function FormAddRes() {
  const [isCoordinates, setIsCoordinates] = useState(false);
  const { register, handleSubmit, reset, watch, setValue } = useForm();
  const userData = useSelector((state) => state.auth.userData);
  const [loading, setLoading] = useState(false);

  const addToSubmitData = async (data) => {
    setLoading(true);
    if (!userData) {
      toast.error("Please Login to Add Registration");
      return;
    }

    // Validation check
    if (!data.foodName || !data.description || !data.price) {
      toast.error("Please fill out all required fields");
      return;
    }

    try {
      // Attempt to upload the image if provided
      const file = data.image[0]
        ? await dbServices.uploadFoodImg(data.image[0])
        : null;
      if (file) {
        const fileId = file.$id; //to set userCreate time id as image id future to find who uploaded
        data.featuredImageId = fileId;

        // Add new food entry to the database
        const newFoodData = {
          ...data,
          userId: userData.$id,
        };

        const AddNewFood = await dbServices.createResturant(newFoodData);
        if (AddNewFood) {
          toast.success("Your Food Added", newFoodData.foodName);
          reset();
        }
      }
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value.trim().toLowerCase().replace(/ /g, "-");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "foodName") {
        setValue("slug", slugTransform(value.foodName), {
          shouldValidate: true,
        });
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);
  const [locality, setLocality] = useState("");

  return (
    <div className="w-full bg-white">
      <div className="w-full h-auto mt-10 border px-6 py-7 flex flex-col gap-3 justify-center">
        <h3 className="text-gray-950 text-xl font-semibold">
          Resturant details
        </h3>
        <p className="text-sm text-gray-400">Name, address and location</p>
        <form
          onSubmit={handleSubmit(addToSubmitData)}
          className="flex flex-col gap-3"
        >
          <Input
            placeholder="resturant Name"
            {...register("resturantName", { required: true })}
          />
          <Input
            placeholder="resturant Complete address"
            {...register("resturantAddress", { required: true })}
          />
          <div className="px-2 py-1 border border-yellow-700 bg-yellow-50 text-yellow-600 text-sm rounded">
            Please ensure this is same as the address on your FSSAI document (if
            applicable)
          </div>
          <Input
            placeholder="Enter your resturant's locality, e.g., sector 43"
            {...register("resturantLocality", { required: true })}
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
          />
          <div className="md:w-full w-full h-96 py-2 px-2 md:py-0 md:px-0">
            <iframe
              width="100%"
              height="100%"
              className="rounded-sm"
              src={`https://maps.google.com/maps?q=${locality}&output=embed`}
              style={{
                filter: "grayscale(0) contrast(1.2) opacity(100%)",
              }}
            ></iframe>
          </div>
          <p
            className="text-right text-blue-500 hover:underline cursor-pointer"
            onClick={() => setIsCoordinates(!isCoordinates)}
          >
            or directly enter the coordinates
          </p>
          {isCoordinates && (
            <div className="flex gap-9">
              <Input
                placeholder="Enter valid latitude"
                {...register("latitude")}
              />
              <Input
                placeholder="Enter valid longitude"
                {...register("longitude")}
              />
            </div>
          )}
          <h3 className="text-gray-950 text-xl font-semibold">
            resturant address details
          </h3>
          <p className="text-sm text-gray-400">
            Address details are based on the resturant location mentioned above
          </p>
          <div className="flex gap-10">
            <select
              name="country"
              id="country"
              className="w-60 border border-gray-200 rounded-lg text-gray-400 px-5"
              {...register("country", { required: true })}
            >
              <option value="India">India</option>
            </select>
            <Input
              placeholder="Enter Pincode"
              {...register("resturantPincode", { required: true })}
            />
          </div>
          <h3 className="text-gray-950 md:text-xl text-sm font-semibold">
            Contact number at resturant
          </h3>
          <p className="text-sm text-gray-400">
            Your customers will call on this number for general inquiries
          </p>
          <div className="flex md:gap-10 gap-2 md:flex-row flex-col">
            <Input
              placeholder="Mobile number at resturant"
              {...register("resturantPhone", { required: true })}
            />
            <Button
              className="px-14 cursor-not-allowed"
              bgColor="bg-gray-300"
              disabled
            >
              Verify
            </Button>
          </div>
          <h2 className="text-center text-xl font-semibold underline text-green-600">
            Add Product
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-3 border px-4 py-5 rounded bg-gray-100">
            <Input
              placeholder="Food Name"
              {...register("foodName", { required: true })}
            />
            <Input
              placeholder="Slug"
              className="cursor-not-allowed"
              readOnly
              {...register("slug", { required: true })}
              onInput={(e) => {
                setValue("slug", slugTransform(e.target.value), {
                  shouldValidate: true,
                });
              }}
            />
            <Input
              placeholder="Price"
              {...register("price", { required: true })}
            />
            <Input
              placeholder="Description"
              {...register("description", { required: true })}
            />
            <Input
              placeholder="Delivery Time"
              {...register("deliveryTime", { required: true })}
            />
            <Input
              type="file"
              {...register("image", { required: true })}
              accept="image/png, image/jpg, image/jpeg, image/gif"
            />
            <select
              name="status"
              id="status"
              className="py-2 px-2 outline-none rounded"
              {...register("status", { required: true })}
            >
              <option value="available">Available Stock</option>
              <option value="unavailable">Out of Stock</option>
            </select>
          </div>
          <Button className="px-14 mt-6 md:w-1/3 w-full">
            {loading ? "Please wait..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default FormAddRes;
