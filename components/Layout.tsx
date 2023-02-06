import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Router from "next/router";

import { AuthContext } from "../store/AuthProvider/AuthProvider";
const Layout = ({ children }: any) => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user && Router.pathname != "/") {
      Router.push("/");
    }
  }, [user]);

  return (
    <div className="h-screen  flex flex-row justify-start ">
      <Sidebar />
      <div className="flex flex-col w-full ">
        <Navbar />
        <div className="bg-white flex-1 p-4  overflow-auto ">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
