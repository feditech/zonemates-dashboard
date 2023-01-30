import React from "react";
import {
  FacebookIcon,
  GoogleIcon,
  AppleIcon,
} from "../components/icons/dealerLoginIcons";

import Logo from "../public/LogoDark.png";
import People from "../public/profile.png";
import { userSignup } from "../Firebase";

const Signup = () => {
  return (
    <div className="p-10 flex  bg-[#F7FAF8]">
      {/* left */}

      <div className=" p-10  my-3 rounded-xl border-0 bg-[#FFF]  text-black w-full sm:p-4">
        <div className="my-5  ">
          <div className="">
            <h1 className="text-3xl font-bold text-center">Welcome Back!</h1>
            <p className="text-md text-[#707070] text-center my-2">
              New to <a className="text-[#105e26]">SleekRide.Co </a> ?
              <a className="text-[#105e26]">Create an account.</a> Are you a
              <a className="text-[#105e26]"> dealer?</a>
            </p>
          </div>
        </div>

        <div className="my-8  ">
          <input
            className="outline-none  border-0 bg-[#F0F0F0] p-4 w-full rounded-md shadow"
            placeholder="Name"
            type="text"
          />
        </div>
        <div className="my-8  ">
          <input
            className="outline-none  border-0 bg-[#F0F0F0] p-4 w-full rounded-md shadow"
            placeholder="Email Address"
            type="text"
          />
        </div>
        <div className="my-8  ">
          <input
            className="outline-none  border-0 bg-[#F0F0F0] p-4 w-full rounded-md shadow"
            placeholder="Password"
            type="text"
          />
        </div>

        <div className=" my-8 mt-16">
          <button
            // onClick={() => navigate(`/dealer-home`)}
            className="bg-[#105E26] p-3 text-white w-full mt-2 rounded shadow-md shadow-[#105E26]"
          >
            Signup
          </button>
        </div>

        <div className=" my-8 ">
          <h1 className="text-center text-md font-bold my-2">
            Connect with Social
          </h1>
          <div className="flex justify-center space-x-4 my-2">
            <FacebookIcon /> <GoogleIcon /> <AppleIcon />
          </div>
          <p className="text-md text-[#707070] text-center my-2 sm:text-sm sm:mt-4">
            By signing in to your account, you agree to use
            <a className="text-[#105e26]">SleekRide.Co </a> and
            <a className="text-[#105e26]">Terms of Service. </a>
          </p>
        </div>
      </div>

      {/* right */}

      <div className=" p-20 px-24   my-3    text-black w-full  md:p-4 sm:p-4">
        <div className="flex items-center justify-center my-8">
          <img className="h-30 w-44" src={Logo.src} />
        </div>
        <div className="my-8">
          <h1 className="text-4xl font-bold text-center md:text-2xl">
            Say hello to best car dealer platform
          </h1>
        </div>
        <div className="my-8">
          <p className="text-center">
            We are lorem ipsum team dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="my-8  flex items-center space-x-2 sm:flex-col sm:justify-center sm:my-10 sm:space-x-0 sm:space-y-2 ">
          <div className="flex">
            <img
              className="h-10 w-10 rounded-full border-2 border-black "
              src={People.src}
            />
            <img
              className="h-10 w-10 rounded-full border-2 border-black -ml-2 "
              src={People.src}
            />
            <img
              className="h-10 w-10 rounded-full border-2 border-black -ml-2 "
              src={People.src}
            />
          </div>
          <p className="sm:text-xs">3k+ people joined us, now it’s your turn</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;