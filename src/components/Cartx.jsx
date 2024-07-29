import React from "react";

function Cartx() {
  return (
    <div className="my-10 relative min-h-[500px]">
      <div className="container mx-auto bg-[white] shadow-sm w-full flex justify-between p-5 px-10">
        <h1>Product</h1>
        <h1>Price</h1>
        <h1 className="w-[110px]">Quantity</h1>
        <h1>Subtotal</h1>
      </div>
      <div className="container mx-auto bg-[white] shadow-sm w-full flex justify-between mt-7 p-5 px-10">
        <h1>img</h1>
        <h1>N5000</h1>
        <div>
          <input
            type="number"
            name=""
            id=""
            placeholder="0"
            className="outline-none w-[40px]"
          />
        </div>
        <h1>Subtotal</h1>
      </div>
      <div className="container mx-auto bg-[white] shadow-sm w-full flex justify-between mt-7 p-5 px-10">
        <h1>img</h1>
        <h1>N5000</h1>
        <div className="">
          <input
            type="number"
            name=""
            id=""
            placeholder="0"
            className="outline-none w-[40px]"
          />
        </div>
        <h1>Subtotal</h1>
      </div>
      <div className=" container px-7 mx-auto mt-7 text-left">
        <button className="border border-gray-500 p-3 rounded-lg">
          Return To Shop
        </button>
      </div>
      <div className="container mx-auto flex justify-end mt-5">
        <div className="w-[400px] text-left p-5 min-h-[200px] border border-gray-500 space-y-2">
            <h1 className="text-xl font-semibold">Cart Total</h1>
            <p className="border-b border-b-gray-300 pb-3 flex justify-between">Subtotal <span>N1000</span></p>
            <p className="border-b border-b-gray-300 pb-3 flex justify-between">Delivery <span>N1000</span></p>
            <p className="flex justify-between">Total <span>N1000</span></p>
            <div className="flex justify-center items-center"> 
            <button className="bg-yellow-500 p-3 rounded-lg">Proceed to checkout </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Cartx;
