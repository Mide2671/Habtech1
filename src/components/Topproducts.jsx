import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import productImage1 from "../assets/product/Macbook_2020lnmyewcp.jpeg";
import productImage2 from "../assets/product/Itel_23lnq4soun.jpeg";
import productImage3 from "../assets/product/Hisenselnmyfoxy.jpeg";
import productImage4 from "../assets/product/Oraimo_ HeadPhonelnpxuh5j.jpeg";
import productImage5 from "../assets/product/Techno_10lnmyasdd.jpeg";
import productImage6 from "../assets/product/max_4lnpxxzla.jpeg";
import productImage7 from "../assets/product/Hp_Laptoplnn2w5uz.jpeg";
import productImage8 from "../assets/product/Oraimo_EarBud 2lnmydms3.jpeg";
import productImage9 from "../assets/product/Samsung_Galaxylnn2v8cj.jpg";
// Import more product images as needed

const products = [
  {
    id: 1,
    name: "Macbook",
    price: "$100",
    image: productImage1,
    rating: 5,
    isNew: true,
    available: 100,
  },
  {
    id: 2,
    name: "Itel 23",
    price: "$360",
    image: productImage2,
    rating: 4,
    isNew: false,
    available: 59,
  },
  {
    id: 3,
    name: "Hisense",
    price: "$360",
    image: productImage3,
    rating: 2,
    isNew: false,
    available: 72,
  },
  {
    id: 4,
    name: "Oraimo Headphones",
    price: "$360",
    image: productImage4,
    rating: 4,
    isNew: true,
    available: 47,
  },
  {
    id: 5,
    name: "Techno",
    price: "$360",
    image: productImage5,
    rating: 3,
    isNew: true,
    available: 20,
  },
  {
    id: 6,
    name: "Tecno",
    price: "$360",
    image: productImage6,
    rating: 5,
    isNew: true,
    available: 83,
  },
  {
    id: 7,
    name: "Hp Laptop",
    price: "$360",
    image: productImage7,
    rating: 5,
    isNew: true,
    available: 83,
  },
  {
    id: 8,
    name: "Oraimo Earbud",
    price: "$360",
    image: productImage8,
    rating: 5,
    isNew: true,
    available: 83,
  },
  {
    id: 9,
    name: "Samsung Galaxy",
    price: "$360",
    image: productImage9,
    rating: 5,
    isNew: true,
    available: 83,
  },
  // Add more products as needed
];

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <section className="bg-white  m-10 text-white py-4">
      <div className="container mx-auto mb-4">
        <div className="flex items-center mb-4">
          <div className="bg-yellow-500 w-2 h-8 mr-4"></div>
          <h2 className="text-yellow-500 text-2xl font-bold">Our Products</h2>
        </div>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="p-2 shadow-xl">
              <div className=" bg-white  rounded-lg p-4  text-black relative">
                {product.isNew && (
                  <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full absolute top-2 left-2">
                    NEW
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover   mb-4"
                />
                <h3 className="text-lg font-bold mb-2 flex ">{product.name}</h3>

                <div className="flex justify-start mb-2  ">
                  <p className="text-red-500 font-bold mb-2 pr-3">
                    {product.price}
                  </p>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={`text-yellow-500 ${
                        i < product.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  <p>({product.available})</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="w-full mt-7 ">
          <button className=" px-6 py-3 bg-yellow-500 tracking-wider  text-black rounded-lg hover:bg-transparent  border border-yellow-500 ">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
