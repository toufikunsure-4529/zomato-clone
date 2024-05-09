import React from "react";
import Herosection from "./HeroSection/Herosection";

function Loading() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div
          className="fixed top-0 left-0 w-full h-full z-10 bg-gray-900 opacity-40 backdrop-blur-lg flex justify-center items-center"
          style={{
            backgroundImage: "url('/images/BackGround.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Herosection />
        </div>

        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    </>
  );
}

export default Loading;
