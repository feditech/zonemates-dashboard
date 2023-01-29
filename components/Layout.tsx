import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar"

const Layout = ({ children }: any) => {
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
