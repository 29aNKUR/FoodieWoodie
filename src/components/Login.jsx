import React from "react";
import Logo from "../assets/img/foodieWoodie.jpg"; //give path name in camelcase
import { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";

const Login = () => {
  const navigate = useNavigate();
  const { logIn, googleSignIn } = useUserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrorMsg] = useState("");

  const handleSubmission = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="container h-screen flex justify-center items-center border">
      <div className=" ">
        <div className="w-full flex justify-center">
          <img src={Logo} alt="" />
        </div>
        <div className="my-[1rem] flex justify-center">
          <label htmlFor="email" className=" mx-[1.7rem] ">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="border-2"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="my-[1rem] flex justify-center">
          <label htmlFor="pass" className="mx-[1rem] ">
            Password
          </label>
          <input
            type="password"
            name="pass"
            className="border-2 "
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="text-red-500">{errMsg}</div>
        <div className="flex justify-center">
          {" "}
          <button
            onClick={handleSubmission}
            className="border border-orange-600 text-orange-400 px-4 py-1 rounded-md shadow-md transition-transform duration-300 hover:scale-105"
          >
            Login
          </button>
        </div>

        <div className="flex justify-center my-[1rem]">
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>

        <div className="flex justify-center">
          <div className="my-1"> Not registered with us yet? </div>

          <div>
            <Link to="/signup">
              <button className="border border-orange-400 bg-orange-400 text-white px-4 py-1 mx-1 rounded-md shadow-md transition-transform hover:scale-105">
                Signup
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
