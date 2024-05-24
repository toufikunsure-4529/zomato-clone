import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.jsx";
import AdminLayout from "./AppLayout/AdminLayout.jsx";
import PaymentLayout from "./AppLayout/PaymentLayout.jsx";
import Layout from "./Layout.jsx";
import Dashboard from "./admin/components/Dashboard.jsx";
import AddResturant from "./components/Resturant/AddResturant.jsx";
import "./index.css";
import Cart from "./pages/Cart.jsx";
import CreateYourRes from "./pages/CreateYourRes.jsx";
import OrderOnline from "./pages/OrderOnline.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";
import Payment from "./pages/Payment.jsx";
import store from "./store/Store.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/add-resturant" element={<AddResturant />} />
        <Route
          path="/add-resturant/create-your-res"
          element={<CreateYourRes />}
        />
        <Route path="/order" element={<OrderOnline />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="/payment" element={<PaymentLayout />}>
        <Route path="" element={<Payment />} />
      </Route>
      <Route path="/ordersuccess" element={<PaymentLayout />}>
        <Route path="" element={<OrderSuccess />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="" element={<Dashboard />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
