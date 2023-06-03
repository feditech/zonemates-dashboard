import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import AuthProvider from "../store/AuthProvider/AuthProvider";

import AppProvider, { AppContext } from "../store/AppProvider/AppProvider";

import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import LoaderWrapper from '../components/LoaderWrapper'
export default function App({ Component, pageProps }: AppProps) {

 
  return (
    <AuthProvider>
      <AppProvider>
        <LoaderWrapper>
        <Component {...pageProps} />
        </LoaderWrapper>
        <ToastContainer
          position="top-right"
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={false}
          closeOnClick
          pauseOnHover
        />
      </AppProvider>
    </AuthProvider>
  );
}
