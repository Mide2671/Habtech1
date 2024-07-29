import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:2000/authUser", formData)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.message)
          navigate("/");
        } 
      }).catch((error)=>{
        if (error.response && error.response.status === 409) {
          setMessage(error.response.data.message);
        } else {
          setMessage("An error occurred while creating the account.");
        }
      })
  };
  return (
    <div className="flex items-center h-screen justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg w-full max-w-sm">
        <div
          className="bg-yellow-500 rounded-t-lg  p-6 text-white text-center"
          style={{ borderBottomRightRadius: "50%" }}
        >
          <h6 className="text-red-500 text-sm font-semibold">{message}</h6>
          <h1 className="text-2xl font-bold">Welcome Back.</h1>
          <h2 className="text-xl font-semibold">Log In!</h2>
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
                  className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  onChange={handleChange}
                  name="email"
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
                  id="password"
                  onChange={handleChange}
                  name="password"
                  value={formData.password}
                  type="password"
                  placeholder="Johan Smith"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="inline-flex items-center text-sm text-gray-700">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Remember Me</span>
              </label>
              <a
                href="/forget"
                className="inline-block align-baseline font-bold text-sm text-yellow-500 hover:text-yellow-800"
              >
                Forget password?
              </a>
            </div>
            <div>
              <h3 className="text-base my-2">
                Don't have an account?{" "}
                <a
                  href="/signup"
                  className="inline-block align-baseline font-bold text-sm text-yellow-500 hover:text-yellow-800"
                >
                  Register
                </a>
              </h3>
            </div>
            <div>
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
                onClick={handleSubmit}
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
