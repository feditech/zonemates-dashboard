import React, { useContext, useState, useEffect } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import {
  FacebookIcon,
  GoogleIcon,
  AppleIcon,
} from "../components/icons/dealerLoginIcons";
import banner from "../public/signupbanner.png";
import People from "../public/profile.png";
import { userSignup } from "../Firebase";

import Router from "next/router";
import { AuthContext } from "../store/AuthProvider/AuthProvider";

const Signup = () => {
  const signupValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Name is too short!")
      .max(20, "Name is too long!")
      .required("Name is Required"),
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

      <div className=" p-10   rounded-xl border-0 bg-[#FFF]  text-black w-full sm:p-4">
        <div className="my-5  ">
          <div className="">
            <h1 className="text-3xl font-bold text-center">
              Welcome To ZoneMates
            </h1>
          </div>
        </div>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={signupValidationSchema}
          // onSubmit={values => userLogin(values, navigation)}
          onSubmit={
            (values) => userSignup(values)
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
              <div className="mt-6  ">
                <input
                  className="outline-none  border-0 bg-[#F0F0F0] p-4 w-full rounded-md shadow"
                  name="name"
                  placeholder="Full Name"
                  onChange={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />
                {errors.name && touched.name && (
                  <p className="text-red">{errors.name}</p>
                )}
              </div>
              <div className="mt-6  ">
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
              <div className="mt-6  ">
                <input
                  className="outline-none  border-0 bg-[#F0F0F0] p-4 w-full rounded-md shadow"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  type="password"
                />
                {errors.password && touched.password && (
                  <p className="text-red">{errors.password}</p>
                )}
              </div>

              <div className=" mt-6">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-[#105E26] p-3 text-white w-full mt-2 rounded shadow-md shadow-[#105E26]"
                >
                  Signup
                </button>
              </div>
            </>
          )}
        </Formik>
        <div className=" mt-6 ">
          <p className="text-md text-[#707070] text-center my-2 sm:text-sm sm:mt-4">
            Already have an Account?
            <a href="/" className="text-[#105e26]">
              Login here{" "}
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

export default Signup;
