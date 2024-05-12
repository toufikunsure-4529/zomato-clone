import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../Button";
import Input from "../Input";
import Container from "../container/Container";

function BugIssueForm() {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const submitForm = (data) => {
    setLoading(true);
    toast.warn(
      "Features may not working they are currently under construction"
    );
  };

  return (
    <div
      className="w-full"
      style={{
        backgroundImage: "url('/images/how-it-work.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <div className="max-w-5xl mx-auto py-6 px-5 flex justify-center items-center gap-6">
          <div className="w-1/2 pl-14">
            <h3 className="text-gray-800 text-4xl font-semibold mb-6 leading-10 ">
              Cannot find your favourite restaurant on Zomato?
            </h3>
            <p className="text-gray-700 ">
              Submit the details and our team will get the restaurant onboard
            </p>
          </div>
          {loading ? (
            <div
              className="bg-yellow-200 text-yellow-800 p-4 w-1/2 rounded"
              role="alert"
            >
              <h1 className="font-semibold text-black">
                Error: Form submission features may not be functioning correctly
                as they are currently under construction.
              </h1>
            </div>
          ) : (
            <div className="bg-white w-1/2 rounded-md shadow-lg px-6 py-10">
              <form
                className="flex flex-col justify-center items-center gap-3"
                onSubmit={handleSubmit(submitForm)}
              >
                <Input
                  placeholder="Resturant name*"
                  {...register("resturantName", {
                    required: "true",
                  })}
                />
                <Input
                  placeholder="Resturant location*"
                  {...register("resturantLocation", {
                    required: "true",
                  })}
                />
                <Input
                  placeholder="Resturant contact number"
                  {...register("phone", {
                    required: "true",
                  })}
                />
                <Input
                  placeholder="What do you like about the resturant"
                  {...register("message", {
                    required: "true",
                  })}
                />
                <Button bgColor="bg-blue-500" className="w-full">
                  Submit
                </Button>
                <p>
                  Restaurant owners can{" "}
                  <Link to="#" className="text-blue-500">
                    add restaurant from here
                  </Link>
                </p>
              </form>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default BugIssueForm;
