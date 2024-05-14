import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateResturant from "../components/Resturant/CreateFormRes/CreateResturant";

function CreateYourRes() {
  useEffect(() => {
    document.title = "Add a zomato -Food";
  }, []);

  return (
    <>
      <CreateResturant />
      <ToastContainer />
    </>
  );
}

export default CreateYourRes;
