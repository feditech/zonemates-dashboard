import React, { useContext } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import { AuthContext } from "../store/AuthProvider/AuthProvider";
const Layout = ({ children }: any) => {
  const { user } = useContext(AuthContext);
  console.log("contexxt", user);
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
