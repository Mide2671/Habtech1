import React from "react";
import { MdSpeed, MdVerified } from "react-icons/md";
import { FaHeadset } from "react-icons/fa";

function Services() {
  return (
    <div className=" flex container md:flex-row flex-col space-y-10 md:space-y-0 mx-auto justify-evenly m-10 py-10 ">
      <div className="flex flex-col justify-center items-center space-y-2">
        <div className="w-10 h-10 rounded-[50%] bg-black flex justify-center items-center">
          <MdSpeed size={20} className="text-white " />
        </div>
        <h3 className="text-sm md:text-lg font-bold tracking-wide ">FREE AND FAST DELIVERY</h3>
        <h6 className="text-sm tracking-wider">Free delivery for all order over N100,000</h6>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <div className="w-10 h-10 rounded-[50%] bg-black flex justify-center items-center">
          <FaHeadset size={20} className="text-white " />
        </div>
        <h3 className="text-sm md:text-lg font-bold tracking-wide">24/7 CUSTOMERS SERVICE</h3>
        <h6 className="text-sm tracking-wider ">Friendly 24/7 customer support </h6>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2">
      <div className="w-10 h-10 rounded-[50%] bg-black flex justify-center items-center">
          <MdVerified size={20} className="text-white " />
        </div>
        <h3 className="text-sm md:text-lg font-bold tracking-wide">MONEY BACK GUARANTEE</h3>
        <h6 className="text-sm tracking-wider">we return money within 7 days </h6>
      </div>
    </div>
  );
}

export default Services;
