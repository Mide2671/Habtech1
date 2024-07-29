import React, { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    comfirmPassword: "",
  });
  const [message, setMessage] = useState();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.comfirmPassword) {
      setMessage("password not the same");
    } else {
      try {
        await axios
          .post("http://localhost:2000/user", {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          })
          .then((response) => {
            if (response.status === 200) {
              navigate("/login");
              console.log(response.data);
            }
          });
      } catch (error) {
        if (error.response && error.response.status === 409) {
          // Status 409 for conflict
          setMessage(error.response.data.message);
        } else {
          setMessage("An error occurred while creating the account.");
        }
        
      }
    }
  };

  return (
    <div className="flex items-center h-screen justify-center py-9 bg-gray-100">
      <div className="bg-white shadow-md rounded-lg w-full max-w-sm">
        <div
          className="bg-yellow-500 rounded-t-lg  p-6 text-white text-center"
          style={{ borderBottomRightRadius: "50%" }}
        >
          <h6 className="text-red-500 text-sm font-semibold">{message}</h6>
          <h1 className="text-2xl font-bold">Welcome Back.</h1>
          <h2 className="text-xl font-semibold">Sign Up!</h2>
        </div>
        <div className="p-6">
          <form>
            <div className="mb-4">
              <div className="flex items-center border border-gray-300 rounded-md">
                <span className="p-2">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12A4 4 0 118 12a4 4 0 018 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14v6m0 0h6m-6 0H6"
                    />
                  </svg>
                </span>
                <input
                  onChange={handleChange}
                  className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="name"
                  value={formData.name}
                  type="text"
                  placeholder="John Doe"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center border border-gray-300 rounded-md">
                <span className="p-2">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12A4 4 0 118 12a4 4 0 018 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14v6m0 0h6m-6 0H6"
                    />
                  </svg>
                </span>
                <input
                  className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  type="text"
                  placeholder="johan@email.com"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center border border-gray-300 rounded-md">
                <span className="p-2">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14v6m0 0h6m-6 0H6"
                    />
                  </svg>
                </span>
                <input
                  className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  type="password"
                  placeholder="password"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center border border-gray-300 rounded-md">
                <span className="p-2">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14v6m0 0h6m-6 0H6"
                    />
                  </svg>
                </span>
                <input
                  className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="comfirmPassword"
                  onChange={handleChange}
                  value={formData.comfirmPassword}
                  type="password"
                  placeholder="comfirm password"
                />
              </div>
            </div>
            <div>
              <h3 className="text-base my-2">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="inline-block align-baseline font-bold text-sm text-yellow-500 hover:text-yellow-800"
                >
                  Login
                </a>
              </h3>
            </div>
            <div>
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
