import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import {
  FacebookIcon,
  GoogleIcon,
  AppleIcon,
} from "../components/icons/dealerLoginIcons";
import Logo from "../public/LogoDark.png";
import People from "../public/profile.png";
import { userLogin } from '../Firebase';
const Login = () => {

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });


  const handleSubmit = async (event: any) => {

  };
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
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginValidationSchema}
          // onSubmit={values => userLogin(values, navigation)}
          onSubmit={values => userLogin(values)
          // onSubmit={values => console.log(values)
          
          }>
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

              <div className="my-8  ">
                <input
                  className="outline-none  border-0 bg-[#F0F0F0] p-4 w-full rounded-md shadow"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <p className='text-red'>{errors.email}</p>
                )}
              </div>
              <div className="my-8  ">
                <input
                  className="outline-none  border-0 bg-[#F0F0F0] p-4 w-full rounded-md shadow"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  type='password'
                />
              </div>

              <div className=" my-8 mt-16">
                <button
                  type='submit'
                  onClick={handleSubmit}
                  className="bg-[#105E26] p-3 text-white w-full mt-2 rounded shadow-md shadow-[#105E26]"
                >
                  Login
                </button>
              </div>
            </>)}
        </Formik>
        < div className=" my-8 ">
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
    </div >
  );
};

export default Login;