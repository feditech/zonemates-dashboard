import React, { useState } from "react";
import { auth, sendPasswordResetEmail } from "../Firebase";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage("Check your email for further instructions");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="p-10 flex justify-center items-center min-h-screen  bg-[#F7FAF8]">
      <div className="max-w-3xl p-10  rounded-xl border-0 bg-[#FFF]  text-black w-full h-[initial] sm:p-4">
        <div className="my-5">
          <div className="">
            <h1 className="text-3xl font-bold text-center">Forgot Password</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-10">
            <input
              className="outline-none border-0 bg-[#F0F0F0] p-4 w-full rounded-md shadow"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {message && (
            <div className="mt-4 text-green-600 text-center">{message}</div>
          )}
          {error && (
            <div className="mt-4 text-red-600 text-center">{error}</div>
          )}
          <div className="mt-10">
            <button
              type="submit"
              className="bg-primary p-3 text-white w-full mt-2 rounded shadow-md shadow-primary"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
