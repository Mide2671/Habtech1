import React from "react";
import productImage1 from "../assets/product/The_best_laptops_you_can_get-removebg-preview.png";
import productImage2 from "../assets/product/Apple_iPhone_14-removebg-preview.png";
import productImage3 from "../assets/product/8a7cf739419c0c10371bf5ff1af371e4-removebg-preview.png";
import productImage4 from "../assets/product/Relógio_Inteligente_Smartwatch_Ultra_Série_8_2023_-_Prata-removebg-preview.png";
function NewArrival() {
  return (
    <div className="new-arrival  m-10 ">
      <div className="flex items-center mb-5 container mx-auto ">
        <div className="bg-yellow-500 w-2 h-8 mr-4"></div>
        <h2 className="text-yellow-500 text-2xl font-bold">New Arrival</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-10 md:space-y-0 md:space-x-10 container mx-auto">
        <div className="bg-black h-[500px] ">
          <div className="flex justify-center h-[80%]">
            <img src={productImage2} alt="" className="" />
          </div>
          <div className="text-white text-left  ms-5 mb-5 ">
            <h3 className="text-xl tracking-wide">Iphone 14</h3>
            <a className="text-sm underline tracking-wide hover:text-yellow-500">
              Shop Now{" "}
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-5 h-[500px]">
          <div className="bg-black justify-between flex items-end  h-[240px]">
            <div className="text-white text-left  ms-5 mb-5 ">
              <h3 className="text-xl tracking-wide">Hp EliteBook G3</h3>
              <a className="text-sm underline tracking-wide hover:text-yellow-500">
                Shop Now{" "}
              </a>
            </div>
            <div className="flex justify-center ">
              <img
                src={productImage1}
                alt=""
                className=" h-[250px] w-[250px]"
              />
            </div>
          </div>

          <div className="flex flex-row space-x-10 h-[240px] ">
            <div className="bg-black p-3 w-1/2 ">
              <div className="flex justify-center items-center">
                <img src={productImage3} alt="" className=" h-[140px] " />
              </div>
              <div className="text-white text-left  ms-5 mb-5  ">
                <h3 className="text-xl">Oraimo Power Bank</h3>
                <a className="text-sm underline tracking-wide hover:text-yellow-500">
                  Shop Now{" "}
                </a>
              </div>
            </div>
            <div className="bg-black p-3 w-1/2">
              <div className="flex justify-center items-center">
                <img src={productImage4} alt="" className=" h-[140px]" />
              </div>

              <div className="text-white text-left  ms-5 mb-5 ">
                <h3 className="text-xl">Smart Watch Series 8</h3>
                <a className="text-sm underline tracking-wide hover:text-yellow-500">
                  Shop Now{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
