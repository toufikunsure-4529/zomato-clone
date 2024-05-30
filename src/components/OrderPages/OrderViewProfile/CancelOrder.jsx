// src/components/CancelOrder.js
import React from "react";
import { toast } from "react-toastify";

const CancelOrder = ({ orderId }) => {
  const handleCancel = () => {
    // Logic to cancel the order goes here
    const response = confirm("Do you want to cancel order?");
    if (response) {
      toast.warn("Wroking Under Progress!");
    }
  };

  return (
    <button
      className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
      onClick={handleCancel}
    >
      Cancel Order
    </button>
  );
};

export default CancelOrder;
