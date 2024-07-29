import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brand1 from "../assets/oraimo.png";
import brand2 from "../assets/itel.png";
import brand3 from "../assets/ios.png";
import brand4 from "../assets/hp.png";
import brand5 from "../assets/tecno.png";

const Brands = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const brands = [
    {
      id: 1,
      img: brand1,
    },
    {
      id: 2,
      img: brand2,
    },
    {
      id:3,
      img: brand3,
    },
    {
      id: 4,
      img: brand4,
    },
    {
      id: 5,
      img: brand5,
    },
  ];

  return (
    <section className="bg-white m-10 text-white py-4">
      <div className="container mx-auto pb-5">
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div key={index} className="px-2">
              <img src= {brand.img} alt={brand.img} className="h-20 " />
            </div>
          ))}
        </Slider>
      </div>
      <div className="container mx-auto mt-10">
        <hr className="" />
      </div>
    </section>
  );
};

export default Brands;
