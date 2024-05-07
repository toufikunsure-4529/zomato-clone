import { useState } from "react";
import "./App.css";
import Faq from "./components/Acordian/Faq";
import CardOrder from "./components/CardOrder";
import Footer from "./components/Footer/Footer";
import Getapp from "./components/Getapp";
import Header from "./components/Header/Header";
import Herosection from "./components/HeroSection/Herosection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Herosection />
      <CardOrder />
      <Getapp />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
