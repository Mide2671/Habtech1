import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";

// Import your images
import image1 from "../assets/hero_endframe__cvklg0xk3w6e_large 2.jpg";
import image2 from "../assets/w4.jpg";
import image3 from "../assets/wa5.jpg";
const data = [
  {
    img: image1,
    text1: "Discover the Latest Tech Gadgets",
    text2: " Explore our collection of the newest and most innovative gadgets in the market. From smart home devices to wearable tech, we have everything you need to stay ahead of the curve. Don't miss out on the future, shop the latest gadgets today!",
    button :'Shop Now'
  },
  {
    img: image2,
    text1: "Exclusive Deals on Top Gadgets",
    text2: "Enjoy unbeatable prices on your favorite gadgets. Our exclusive deals offer you the best technology at amazing discounts. Hurry, these offers are for a limited time only. Grab the deal and upgrade your tech game now!",
    button :'Grab the Deal'
  },
  {
    img: image3,
    text1: "Our Best-Selling Gadgets",
    text2: "Check out our most popular gadgets that our customers can't get enough of. These best-sellers combine top performance with exceptional value. Join the trend and find out why these gadgets are a must-have. Shop our best-sellers today!",
    button :'Shop Best Sellers'
  },
];
const Main = () => {
  
  return (

    <Swiper
      spaceBetween={30}
      speed={3000}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      effect={"fade"}
      fadeEffect={{ crossFade: true }}
      modules={[Autoplay, EffectFade]}
      className="h-[calc(100vh-4.5rem)]  bg-black text-white "
    >
      {data.map((data, id) => (
        <SwiperSlide
          key={id}
          className="w-full h-screen flex flex-col md:gap-10 gap-4 pt-10 md:pt-8 "
        >
          <main
            className={`flex lg:flex-row lg:items-center flex-col items-start px-20  relative overflow-hidden md:px-16 lg:m-[120px] m-[40px]`}
          >
            <div className="flex flex-col gap-4 lg:w-1/2 justify-center lg:items-start lg:text-left w-full items-center text-center mb-5 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {data.text1}
              </h1>
              <p className="text-md md:text-lg mb-6">{data.text2}</p>
              <button className="px-6 py-3 bg-yellow-500  text-white rounded-lg hover:bg-transparent  border border-yellow-500 ">
               {data.button}
              </button>
            </div>

            <div className="lg:w-3/5 w-full lg:-mt-6 relative">
              <img
                src={data.img}
                loading="eager"
                alt="img"
                className="w-[700] h-[700] mx-auto"
              />
            </div>
          </main>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Main;
