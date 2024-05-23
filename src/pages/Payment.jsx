import { Button } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OrderAmountSummary from "../components/OrderPages/OrderAmountSummary";
import Container from "../components/container/Container";

function Payment() {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItem);
  const userData = useSelector((state) => state.auth.userData);
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert("Working...");
  };

  return (
    <div className="w-full bg-green-100 min-h-screen flex items-center justify-center">
      <Container>
        <div className="max-w-5xl mx-auto px-5 py-10 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-5">
            Payment Options
          </h2>
          <OrderAmountSummary />
          <form onSubmit={handlePlaceOrder}>
            <div className="mt-8">
              <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-8">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="payment"
                    id="cash"
                    className="peer opacity-0"
                    required
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label
                    htmlFor="cash"
                    className="flex items-center cursor-pointer text-lg font-semibold text-blue-900 border border-blue-900 px-4 py-2 rounded-lg peer-checked:bg-blue-900 peer-checked:text-white transition duration-300"
                  >
                    Cash On Delivery
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="payment"
                    id="online"
                    className="peer hidden"
                    disabled
                  />
                  <label
                    htmlFor="online"
                    className="flex items-center cursor-not-allowed text-lg font-semibold text-blue-900 border border-gray-300 px-4 py-2 rounded-lg peer-disabled:opacity-50 peer-disabled:cursor-not-allowed"
                  >
                    Pay Online
                  </label>
                </div>
              </div>
              <p className="mt-3 text-center text-red-600">
                Online Payment Option Not Available Currently
              </p>
            </div>
            <div className="mt-8 flex justify-center gap-2">
              <Button variant="outlined" onClick={() => navigate("/cart")}>
                Back
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Place Order
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Payment;
