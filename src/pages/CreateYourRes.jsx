import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Createresturant from "../components/Resturant/Components-Resturant/CreateResturant";

function CreateYourRes() {
  useEffect(() => {
    document.title = "Add a zomato -Food";
  }, []);

  return (
    <>
      <Createresturant />
      <ToastContainer />
    </>
  );
}

export default CreateYourRes;
