import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Button from "../../Button";
import Input from "../../Input";
import Container from "../../container/Container";

function CreateResturant() {
  const [isCoordinates, setIsCoordinates] = useState(false);
  const { register, handleSubmit, reset } = useForm();


  const addToSubmitData = (data) => {
    console.log(data);
    toast.success("Your Product Added Suceessfully");
  };
  return (
    <>
      <div className="w-full bg-red-800 py-3 pb-14">
        {/* <Container></Container> */}
      </div>

      <div className="w-full bg-white ">
        <Container>
          <div className="max-w-4xl mx-auto py-2 md:px-5 px-0 flex md:flex-row flex-col gap-3 justify-center">
            <div className="w-72 h-full shadow-lg rounded-md shadow-blue-100  py-4 bg-green-50">
              <h2 className="text-gray-900 font-semibold text-sm px-2">
                1. Create your restaurant page
              </h2>
              <hr className="mx-2 my-4 " />
              <div className="flex flex-col gap-4 px-1">
                <div className=" border-l-2 border-red-500 pl-2">
                  <h2 className="text-sm font-semibold ">
                    Restaurant Information
                  </h2>
                  <p className="text-sm text-gray-500">
                    Restaurant name, address, contact no., owner details
                  </p>
                </div>
                <div className=" border-l-2 border-red-500 pl-2">
                  <h2 className="text-sm font-semibold">
                    Restaurant Type & Timings
                  </h2>
                  <p className="text-sm text-gray-500">
                    Establishment & cuisine type, opening hours
                  </p>
                </div>
                <div className=" border-l-2 border-red-500 pl-2">
                  <h2 className="text-sm font-semibold">Upload Images</h2>
                  <p className="text-sm text-gray-500">
                    Menu, restaurant, food images
                  </p>
                </div>
              </div>
            </div>

            {/* right side container */}
            <div className="w-full">
              <h2 className="md:text-4xl text-2xl md:font-light font-semibold text-center md:text-left">
                Restaurant Information
              </h2>
              <div className="w-full h-auto mt-10 border px-6 py-7 flex flex-col gap-3 justify-center">
                <h3 className="text-gray-950 text-xl font-semibold ">
                  Restaurant details
                </h3>
                <p className="text-sm text-gray-400">
                  Name, address and location
                </p>
                <form
                  onSubmit={handleSubmit(addToSubmitData)}
                  className="flex flex-col gap-3"
                >
                  <Input
                    placeholder="Resturant Name"
                    {...register("resturantName", {
                      required: "true",
                    })}
                  />
                  <Input
                    placeholder="Resturant Complete address"
                    {...register("resturantAddress", {
                      required: "true",
                    })}
                  />
                  <div className="px-2 py-1 border border-yellow-700 bg-yellow-50 text-yellow-600 text-sm rounded">
                    Please ensure this is same as the address on your FSSAI
                    document (if applicable)
                  </div>
                  <Input
                    placeholder="Enter your resturant's locality ,eg.sector 43"
                    {...register("resturantLocality", {
                      required: "true",
                    })}
                  />
                  <div className="md:w-full w-full h-96 py-2 px-2  md:py-0 md:px-0">
                    <iframe
                      width="100%"
                      height="100%"
                      className="rounded-sm"
                      src={`https://maps.google.com/maps?q=Hariharpara&output=embed`}
                      style={{
                        filter: "grayscale(0) contrast(1.2) opacity(100%)",
                      }}
                    ></iframe>
                  </div>
                  <p
                    className="text-right text-blue-500 hover:underline cursor-pointer"
                    onClick={() => setIsCoordinates(!isCoordinates)}
                  >
                    or directly enter the co-ordinates
                  </p>
                  {isCoordinates && (
                    <div className="flex  gap-9">
                      <Input placeholder="Enter valid latitude" />
                      <Input placeholder="Enter valid longitude" />
                    </div>
                  )}
                  <h3 className="text-gray-950 text-xl font-semibold">
                    Restaurant address details
                  </h3>
                  <p className="text-sm text-gray-400">
                    Address details are basis the restaurant location mentioned
                    above
                  </p>
                  <div className="flex gap-10">
                    <select
                      name="india"
                      id="india"
                      className="w-60 border border-gray-200 rounded-lg text-gray-400 px-5"
                    >
                      <option value="india">India</option>
                    </select>
                    <Input
                      placeholder="Enter Pincode"
                      {...register("resturantPincode", {
                        required: "true",
                      })}
                    />
                  </div>
                  <h3 className="text-gray-950 md:text-xl text-sm font-semibold">
                    Contact number at restaurant
                  </h3>
                  <p className="text-sm text-gray-400">
                    Your customers will call on this number for general
                    enquiries
                  </p>
                  <div className="flex md:gap-10 gap-2 md:flex-row flex-col">
                    <Input
                      placeholder="Mobile number at resturant"
                      {...register("resturantPhone", {
                        required: "true",
                      })}
                    />
                    <Button
                      className="px-14 cursor-not-allowed"
                      bgColor="bg-gray-300"
                      disabled
                    >
                      Verify
                    </Button>
                  </div>
                  {/* Product */}
                  <h2 className="text-center text-xl font-semibold underline text-green-600">
                    Add Product
                  </h2>
                  <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-3 border px-4 py-5 rounded bg-gray-100">
                    <Input
                      placeholder="Food Name"
                      {...register("foddName", {
                        required: "true",
                      })}
                    />
                    <Input
                      placeholder="slug"
                      {...register("slug", {
                        required: "true",
                      })}
                    />
                    <Input
                      placeholder="Price"
                      {...register("price", {
                        required: "true",
                      })}
                    />
                    <Input
                      placeholder="Description"
                      {...register("description", {
                        required: "true",
                      })}
                    />
                    <Input
                      placeholder="Delivery Time"
                      {...register("deliveryTime", {
                        required: "true",
                      })}
                    />
                    <Input
                      type="file"
                      {...register("images", {
                        required: "true",
                      })}
                    />
                    <select
                      name="status"
                      id="status"
                      className="py-2 px-2 outline-none rounded"
                      {...register("status", {
                        required: "true",
                      })}
                    >
                      <option value="available">Available Stock</option>
                      <option value="unavailable">Out of Stock</option>
                    </select>
                  </div>
                  <Button className="px-14 mt-6 md:w-1/3 w-full ">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default CreateResturant;
