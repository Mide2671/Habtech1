import React, { useState } from "react";
import img from "../assets/dell-removebg-preview.png";
function Offer() {
  const [offerEndsDate, setOfferEndsDate] = useState("june 15, 2024 00:00:00");
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minute, setMinute] = useState();
  const [seconds, setSeconds] = useState();
  let date = new Date(offerEndsDate).getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const diff = date - now;
    setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinute(Math.floor((diff % (1000 * 60 * 60 )) / (1000 * 60)));
    setSeconds(Math.floor(Math.floor((diff % (1000 * 60 )) / 1000)));
  }, 1000);
  return (
    <div className="bg-black my-10 container mx-auto">
      <div className=" flex flex-col py-5 md:py-0 md:flex-row items-center justify-around">
        <div className="text-white text-center md:text-left space-y-2">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
            Best Offer
          </h1>
          <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
            Free Delivery Every Sunday
          </h3>
          <div className="flex flex-row space-x-3 py-2">
            <p className="bg-white text-black rounded-full w-[60px] h-[60px] text-sm font-bold flex flex-col justify-center items-center p-2">
              {hours} <span className="font-light">Hours</span>
            </p>
            <p className="bg-white text-black rounded-full w-[60px] h-[60px]  text-sm font-bold flex flex-col justify-center items-center p-2">
              {days} <span className="font-light">Days</span>
            </p>
            <p className="bg-white text-black rounded-full w-[60px] h-[60px]  text-sm font-bold flex flex-col justify-center items-center p-2">
            {minute} <span className="font-light">Minute</span>
            </p>
            <p className="bg-white text-black rounded-full w-[60px] h-[60px]  text-sm font-bold flex flex-col justify-center items-center p-2">
             {seconds} <span className="font-light">Seconds</span>
            </p>
          </div>
          <button className="bg-yellow-500 rounded-lg p-3 hover:bg-yellow-600">
            Shop Now
          </button>
        </div>
        <div className="h-1/2">
          <img src={img} alt="img" className="w-[400px]" />
        </div>
      </div>
    </div>
  );
}

export default Offer;
