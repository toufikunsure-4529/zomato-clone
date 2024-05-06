import { useState } from "react";
import "./App.css";
import CardOrder from "./components/CardOrder";
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
    </>
  );
}

export default App;
