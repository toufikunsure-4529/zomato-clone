import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Faq from "./components/Acordian/Faq";
import CardOrder from "./components/CardOrder";
import Footer from "./components/Footer/Footer";
import Getapp from "./components/Getapp";
import Header from "./components/Header/Header";
import Herosection from "./components/HeroSection/Herosection";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Header />
      <Herosection />
      <Login />
      <CardOrder />
      <Getapp />
      <Faq />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
