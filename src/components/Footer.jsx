import React from "react";
import { CgArrowRight } from "react-icons/cg";
function Footer() {
  return (
    <div className="bg-black text-white py-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4  py-3">
        <div className="p-2 flex items-start space-y-3 flex-col ">
          <h3 className="text-lg tracking-wider md:text-xl font-bold ">
            Exclusive
          </h3>
          <p className="text-sm tracking-wider md:text-lg  ">Subscribe</p>
          <p className="font-light text-sm">Get 10% off your first order</p>
          <div className="border border-white w-[200px] h-auto flex items-center rounded-sm  p-3">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="text-black bg-transparent focus:outline-none  w-[70%]"
            />
            <CgArrowRight size={22} color="white" />
          </div>
        </div>
        <div className="p-2 flex items-start space-y-3 flex-col ">
          <h3 className="text-lg tracking-wider md:text-xl font-bold ">
            Account
          </h3>
          <p className="font-light text-sm">My Account</p>
          <p className="font-light text-sm">Login / Register</p>
          <p className="font-light text-sm">Cart</p>
          <p className="font-light text-sm">Shop</p>
        </div>
        <div className="p-2 flex items-start space-y-3 flex-col ">
          <h3 className="text-lg tracking-wider md:text-xl font-bold ">
            Quick Links
          </h3>
          <p className="font-light text-sm">Privacy Policy</p>
          <p className="font-light text-sm">Terms Of Use</p>
          <p className="font-light text-sm">FAQ</p>
          <p className="font-light text-sm">Contact</p>
        </div>
        <div className="p-2 flex items-start space-y-3 flex-col ">
          <h3 className="text-lg tracking-wider md:text-xl font-bold ">
            Exclusive
          </h3>
          <p className="text-sm tracking-wider md:text-lg  ">Subscribe</p>
          <p className="font-light text-sm">Get 10% off your first order</p>
          <div className="border border-white w-[200px] h-auto flex items-center rounded-sm  p-3">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="text-black bg-transparent focus:outline-none  w-[70%]"
            />
            <CgArrowRight size={22} color="white" />
          </div>
        </div>
      </div>
      <div>
       <p className="text-sm font-light pt-5 text-gray-500 border-t border-t-gray-500"> &copy; Copyright Habtech 2024. All right reserved </p>
      </div>
    </div>
  );
}

export default Footer;
