import React, { useEffect } from "react";
import FoodView from "../components/OrderPages/FoodView";
import Order from "../components/OrderPages/Order";
import OrderOnlineCard from "../components/OrderPages/OrderOnlineCard";

function OrderOnline() {
  useEffect(() => {
    document.title = "Order food online in Kolkata | Zomato";
  }, []);

  return (
    <>
      <Order />
      <FoodView />
      <OrderOnlineCard />
    </>
  );
}

export default OrderOnline;
