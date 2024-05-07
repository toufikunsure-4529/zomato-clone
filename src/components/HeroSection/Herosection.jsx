import { MapPinIcon } from "@heroicons/react/24/solid";

import React from "react";

function Herosection() {
  return (
    <div
      className="py-28 w-full"
      style={{
        backgroundImage: "url('/images/BackGround.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center gap-7 px-5">
        <img
          src="/images/Zomato-Logo.png"
          alt="Zomato Logo"
          className={`h-14 w-auto`}
        />{" "}
        <h1 className="md:text-4xl text-2xl text-white text-center mb-4">
          Discover the best food & drinks in Chhindwara
        </h1>
        <div className="bg-white h-14 w-full flex gap-2 rounded-lg shadow-lg border-l-8 border-red-600">
          <div className="w-1/3 border-r-4 border-gray-200 border-spacing-1 relative flex items-center ">
            <input
              type="text"
              placeholder="Kolkata"
              className="h-full w-full px-8 rounded-md outline-none"
            />
            <MapPinIcon className="h-7 w-7 text-red-400 absolute" />
          </div>
          <div className="w-2/3 relative flex items-center border-r-4 border-red-600 rounded-lg">
            {/* <SearchIcon className="h-5 w-5 text-gray-500" aria-hidden="true" /> */}
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
              className="h-full w-full px-8 rounded-md outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-gray-600 absolute"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
