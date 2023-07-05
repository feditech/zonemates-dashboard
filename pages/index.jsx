import React, { useContext, useState, useEffect } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import banner from "../public/loginbanner.png";
import { userLogin } from "../Firebase";
import Router from "next/router";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import Link from "next/link";

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
    if (user) {
      Router.push("/dashboard");
    }
  }, [user]);
  return (
    <div className="p-10 flex items-center min-h-screen  bg-[#F7FAF8]">
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
                  className="bg-primary p-3 text-white w-full mt-2 rounded shadow-md shadow-primary"
                >
                  Login
                </button>
              </div>
            </>
          )}
        </Formik>
        <div className=" mt-6 ">
          <p className="text-md text-[#707070] text-center my-2 sm:text-sm sm:mt-4">
            Don&apos;t have an Account?{" "}
            <Link href="/signup" className="text-primary">
              Signup here{" "}
            </Link>
          </p>
          <p className="text-md text-[#707070] text-center my-2 sm:text-sm sm:mt-4">
            <Link href="/forgotPassword" className="text-primary">
              Forgot Password?{" "}
            </Link>{" "}
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
