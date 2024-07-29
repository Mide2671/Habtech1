import React, { useState } from "react";
import { useParams } from "react-router-dom";
import image from "../assets/product/The_best_laptops_you_can_get-removebg-preview.png";
function Productx() {
  const params = useParams();
  const id = params.id;
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 p-10 lg:space-x-10">
        <div className="bg-[whitesmoke] h-[450px] flex justify-center items-center">
          <img src={image} alt="" className="h-[90%]" />
        </div>
        <div className="h-[450px]  text-left space-y-3 lg:mt-0 mt-5">
          <h1 className="text-lg font-bold tracking-wide">
            {" "}
            Hp Laptop Elitebook G11
          </h1>
          <p className="font-[500] ">$192.80</p>
          <p className="border-b border-b-gray-500 pb-6 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            saepe hic obcaecati ipsam eligendi molestias unde in ea esse, nulla,
            nihil assumenda maxime?
          </p>
          <div className="flex space-x-10 mt-10 py-4 mb-4">
            <div className="flex">
              <button
                type="button"
                className="border rounded-l-lg border-gray-200 w-10 hover:bg-yellow-500"
                onClick={() =>
                  quantity > 0 && setQuantity((quantity) => quantity - 1)
                }
              >
                -
              </button>
              <div className="w-[50px] h-10 border border-gray-200 flex justify-center items-center">
                {quantity}
              </div>
              <button
                className="border border-gray-200 w-10 hover:bg-yellow-500 rounded-r-lg"
                onClick={() => setQuantity((quantity) => quantity + 1)}
              >
                +
              </button>
            </div>
            <button className="bg-yellow-500 p-2 rounded-lg hover:bg-yellow-600">
              Add to Cart{" "}
            </button>
          </div>

          <div className="border border-gray-500 w-[fit-content] ">
            <div className=" border-b border-b-gray-500 p-5">
              <h1>Free and Fast Delivery</h1>
              <p>Free delivery for all orders over N100,000</p>
            </div>
            <div className="p-5">
              <h1>Free and Fast Delivery</h1>
              <p>Free delivery for all orders over N100,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productx;
