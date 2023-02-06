import React, { useContext, useState, useEffect } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import {
  FacebookIcon,
  GoogleIcon,
  AppleIcon,
} from "../components/icons/dealerLoginIcons";

import banner from "../public/loginbanner.png";
import { userLogin } from "../Firebase";
import Router from "next/router";
import { AuthContext } from "../store/AuthProvider/AuthProvider";

const Login = () => {
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });
  const { user } = useContext(AuthContext);
  useEffect(() => {
    console.log(user, "Usersssss");
    if (user) {
      Router.push("/dashboard");
    }
  }, [user]);
  return (
    <div className="p-10 flex  bg-[#F7FAF8]">
      {/* left */}

      <div className=" p-10  rounded-xl border-0 bg-[#FFF]  text-black w-full h-[initial] sm:p-4">
        <div className="my-5  ">
          <div className="">
            <h1 className="text-3xl font-bold text-center">Welcome Back!</h1>
          </div>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginValidationSchema}
          // onSubmit={values => userLogin(values, navigation)}
          onSubmit={
            (values) => userLogin(values)
            // onSubmit={values => console.log(values)
          }
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <div className="mt-10  ">
                <input
                  className="outline-none  border-0 bg-[#F0F0F0] p-4 w-full rounded-md shadow"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <p className="text-red">{errors.email}</p>
                )}
              </div>
              <div className="mt-10  ">
                <input
                  className="outline-none  border-0 bg-[#F0F0F0] p-4 w-full rounded-md shadow"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  type="password"
                />
              </div>

              <div className=" mt-10">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-[#105E26] p-3 text-white w-full mt-2 rounded shadow-md shadow-[#105E26]"
                >
                  Login
                </button>
              </div>
            </>
          )}
        </Formik>
        <div className=" mt-6 ">
          <p className="text-md text-[#707070] text-center my-2 sm:text-sm sm:mt-4">
            Don't have an Account?
            <a href="/signup" className="text-[#105e26]">
              Signup here{" "}
            </a>{" "}
          </p>
        </div>
        <div className=" mt-6 ">
          <h1 className="text-center text-md font-bold my-2">
            Connect with Social
          </h1>
          <div className="flex justify-center space-x-4 my-2">
            <FacebookIcon /> <GoogleIcon /> <AppleIcon />
          </div>
          <p className="text-md text-[#707070] text-center my-2 sm:text-sm sm:mt-4">
            By signing in to your account, you agree to use
            <a className="text-[#105e26]">ZoneMates </a> and
            <a className="text-[#105e26]">Terms of Service. </a>
          </p>
        </div>
      </div>

      {/* right */}

      <div className=" p-0      text-black w-full  ">
        <img className="h-full object-cover" src={banner.src} />
      </div>
    </div>
  );
};

export default Login;
