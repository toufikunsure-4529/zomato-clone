import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import authServiceAppwrite from "./appwrite/auth";
import Faq from "./components/Acordian/Faq";
import CardOrder from "./components/CardOrder";
import Getapp from "./components/Getapp";
import Herosection from "./components/HeroSection/Herosection";
import Login from "./components/Login";
import SignupComp from "./components/SignupComp";
import { login as storeLogin } from "./store/authSlice";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authServiceAppwrite
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(storeLogin({ userData }));
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Herosection />
          <Login />
          <SignupComp />
          <CardOrder />
          <Getapp />
          <Faq />
          <ToastContainer />
        </>
      )}
    </>
  );
}

export default App;
