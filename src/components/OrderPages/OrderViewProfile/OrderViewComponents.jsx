import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CancelOrder from "./CancelOrder";
import OrderStatus from "./OrderStatus";

const OrderViewComponents = ({ order }) => {
  const navigate = useNavigate();
  
  return (
    <>
      {order.length === 0 ? (
        <div className="max-w-6xl mx-auto px-5 py-6 flex justify-center items-center flex-col">
          <p className="font-semibold text-lg mb-4 text-gray-600">
            No orders found. Please order now.
          </p>
          <Button 
            variant="contained" 
            color="primary"
            className="py-2 px-6 text-lg"
            onClick={() => navigate("/order")}
          >
            Order Now
          </Button>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-5 py-6">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-lg rounded-lg">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="py-3 px-4 text-left">Order ID</th>
                  <th className="py-3 px-4 text-left">Item Name</th>
                  <th className="py-3 px-4 text-left">Price</th>
                  <th className="py-3 px-4 text-left">Status</th>
                  <th className="py-3 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {order.map((order, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-4 px-4">{order.orderId}</td>
                    <td className="py-4 px-4">{order.name}</td>
                    <td className="py-4 px-4">{order.price}/-</td>
                    <td className="py-4 px-4">
                      <OrderStatus status={order.orderStatus} />
                    </td>
                    <td className="py-4 px-4">
                      <CancelOrder orderId={order.userId} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderViewComponents;
