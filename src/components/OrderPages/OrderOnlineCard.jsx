import React from "react";
import Container from "../container/Container";

function OrderOnlineCard() {
  return (
    <div className="w-full bg-white">
      <Container>
        <div className="max-w-5xl mx-auto py-6 px-6 flex flex-col gap-6">
          <h3 className="text-3xl font-semibold text-gray-700">
            Order food online in Kolkata
          </h3>
          <div className="grid md:grid-cols-3 grid-cols-1">
            <div className="border border-gray-50 hover:border-gray-200 overflow-hidden rounded-xl hover:shadow-xl  w-80 h-auto px-3 py-3">
              <img
                src="/images/collection1.webp"
                alt=""
                className="h-52 w-full rounded-xl object-cover"
              />
              <div className="flex justify-between">
                <div className="flex flex-col mt-2">
                  <h3 className="text-xl text-gray-800 font-semibold">
                    Food Name
                  </h3>
                  <div>
                    <p className="text-xs text-gray-500">Resturant Name</p>
                    <p className="text-sm text-gray-500">Resturant Location</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-green-600">15% off</p>
                    <p className="text-2xl font-semibold text-gray-900 text-right">
                      ₹80
                    </p>
                  </div>
                  <div className="text-white">
                    <button className="border px-3 bg-green-600 rounded">
                      -
                    </button>
                    <button className="border px-3 bg-green-600 rounded">
                      1
                    </button>
                    <button className="border px-3 bg-green-600 rounded">
                      +
                    </button>
                  </div>
                  <p className="text-green-600 text-right">20 Mins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OrderOnlineCard;
