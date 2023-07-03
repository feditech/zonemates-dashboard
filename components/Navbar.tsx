import React from "react";
import ProfileDropDown from "./dropdown/ProfileDropDown";
const Navbar = () => {
  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 h-20 dark:bg-gray-900  w-full">
      <div className="flex flex-wrap  justify-between items-center ">
        <div className="flex items-center space-x-2">
          <p className="font-bold text-2xl">Admin Dashboard</p>
        </div>
    
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col justify-center p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="">
              <ProfileDropDown />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
