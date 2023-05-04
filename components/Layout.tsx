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
    <div className="flex flex-row justify-start  ">
      <Sidebar />
      <div className="flex flex-col w-full overflow-auto max-h-screen">
        <Navbar />
        <div className="bg-white p-4  ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;


