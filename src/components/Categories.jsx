import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  { name: "Phones" },
  { name: "Computer" },
  { name: "Headphones" },
  { name: "Smart Watches" },
  { name: "Earpods" },
  // Add more categories as needed
];

const Categories = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
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

  return (
    <section className="bg-white m-10 text-white py-4">
        <div className="container mx-auto mt-10">
        <hr className="" />
      </div>
      <div className="container mx-auto flex  flex-col mb-4">
        <div className="flex items-center mt-10 mb-5">
          <div className="bg-yellow-500 w-2 h-8 mr-4"></div>
          <h2 className="text-yellow-500 text-2xl font-bold">Categories</h2>
        </div>
        <h1 className="text-black text-xl md:text-3xl font-semibold flex mb-5 ">
          Browse By Category
        </h1>
      </div>
      <div className="container mx-auto pb-5">
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index} className="px-2">
              <div className="border border-gray-800 p-4 text-[gray] rounded-lg text-center flex flex-col justify-center items-center space-y-3">
                {category.name}
              </div>
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

export default Categories;
