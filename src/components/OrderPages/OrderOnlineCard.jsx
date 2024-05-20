import React, { useEffect, useState } from "react";
import dbServices from "../../appwrite/DBconfig";
import Container from "../container/Container";
import Loading from "../Loading";

function OrderOnlineCard() {
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dbServices
      .getZomatoFood()
      .then((data) => {
        if (data) {
          setFoodData(data.documents);
        }
      })
      .finally(() => setLoading(false));
  }, []);
  console.log(foodData);
  return (
    <div className="w-full bg-white">
      <Container>
        <div className="max-w-5xl mx-auto py-6 px-6 flex flex-col gap-6">
          <h3 className="text-3xl font-semibold text-gray-700">
            Order food online in Kolkata
          </h3>
          {loading ? (
            <Loading />
          ) : (
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-2">
              {foodData.map((data, index) => (
                <div
                  className={`border border-gray-50 hover:border-gray-200 overflow-hidden rounded-xl hover:shadow-xl  w-80 h-auto px-3 py-3 ${
                    data.status === "unavailable"
                      ? "pointer-events-none grayscale"
                      : ""
                  }`}
                  key={index}
                >
                  {data.status === "unavailable" ? (
                    <p className="bg-green-600 inline-block px-2 py-1 rounded-full">
                      Out of Stock
                    </p>
                  ) : (
                    ""
                  )}
                  <img
                    src={dbServices.getFoodImgPreview(data.featuredImageId)}
                    alt={data.foodName}
                    className="h-52 w-full rounded-xl object-cover"
                  />

                  <div className="flex justify-between">
                    <div className="flex flex-col mt-2">
                      <h3 className="text-xl text-gray-800 font-semibold">
                        {data.foodName}
                      </h3>
                      <div>
                        <p className="text-xs text-gray-500">Resturant Name</p>
                        <p className="text-sm text-gray-500">
                          {data.resturantLocality}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-2 items-center justify-center">
                        <p className="text-green-600">15% off</p>
                        <p className="text-2xl font-semibold text-gray-900 text-right">
                          ₹{data.price}
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
                      <p className="text-green-600 text-right">
                        {data.deliveryTime} min
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* end */}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default OrderOnlineCard;
