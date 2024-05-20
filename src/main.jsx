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
import Layout from "./Layout.jsx";
import AddResturant from "./components/Resturant/AddResturant.jsx";
import "./index.css";
import CreateYourRes from "./pages/CreateYourRes.jsx";
import OrderOnline from "./pages/OrderOnline.jsx";
import store from "./store/Store.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<App />} />
      <Route path="/add-resturant" element={<AddResturant />} />
      <Route
        path="/add-resturant/create-your-res"
        element={<CreateYourRes />}
      />
      <Route path="/order" element={<OrderOnline />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
