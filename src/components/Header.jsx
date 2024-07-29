import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className="bg-white text-black shadow-md py-4 h-[4.5rem] shadow-lg z-10 sticky top-0">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className="text-black hover:text-gray-400 visible md:hidden"
          >
            <FaBars size="1.5em" />
          </button>
          <div className="text-2xl font-bold text-yellow-500 ml-4">
            <a href="/">Habtech</a>
          </div>
        </div>
        <div
          className={`flex items-center w-full max-w-md mx-4 ${
            isSearchVisible ? "flex" : "hidden"
          } md:flex`}
        >
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 border rounded-l-md focus:outline-none"
          />
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-r-md hover:bg-yellow-400 focus:outline-none">
            <FaSearch />
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSearch}
            className="md:hidden text-black hover:text-gray-400"
          >
            <FaSearch size="1.5em" />
          </button>
          <a href="/cart" className="text-black hover:text-gray-400 relative">
            <FaShoppingCart size="1.5em" className="z-10 relative" />
            <h1 className="absolute top-[-14px] right-[-7px] bg-red-700 text-white w-5 h-5 rounded-[50%] items-center justify-center flex ">
              2
            </h1>
          </a>
          <a href="/profile" className="text-black hover:text-gray-400">
            <FaUser size="1.5em" />
          </a>
        </div>
      </div>
      {isMenuVisible ? (
        <div className="bg-gray-800 text-white p-4 absolute left-0 top-16 w-full md:w-64 md:left-auto md:right-0 shadow-lg z-50">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
              Orders
            </li>
            <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
              Settings
            </li>
            <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
              Products by Categories
            </li>
            <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
              Profile
            </li>
            <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
              Logout
            </li>
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </header>
  );
};

export default Header;
