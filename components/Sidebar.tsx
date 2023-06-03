import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import "../styles/Sidebar.module.css";
import Logo from "../public/Logo.png";

import {
  CollapsIcon,
  HomeIcon,
  BookingIcon,
  SettingIcon,
} from "./icons";

import Image from "next/image";
const menuItems = [
  {
    id: 2,
    label: "Dashboard",
    icon: HomeIcon,
    link: "/dashboard",
    sublinks: [],
  },
  {
    id: 3,
    label: "Bookings",
    icon: BookingIcon,
    link: "/bookings",
    sublinks: [],
  },
  {
    id: 6,
    label: "Settings",
    icon: SettingIcon,
    link: "/setting",
    sublinks: [],
  },
];

const Sidebar = () => {
  const router = useRouter();

  const [isCollapsible, setIsCollapsible] = useState(false);

  const [toggleCollapse, setToggleCollapse] = useState(
    typeof window !== "undefined" &&
      localStorage.getItem("toggleCollapse") === "false"
      ? false
      : true
  );

  useEffect(() => {
    localStorage.setItem("toggleCollapse", toggleCollapse.toString());
  }, [toggleCollapse]);

  const [toggleDashboard, setToggleDashboard] = useState(
    "/dashboard" === router.pathname
  );

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };
  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };
  return (
    <div
      className={`Sidebar overflow-auto min-h-screen max-h-screen   px-4 pt-8 pb-4  thin-scroll bg-primary flex justify-between flex-col  ${
        !toggleCollapse && "w-80"
      } ${toggleCollapse && "w-20 justify-center"}    `}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col  ">
        <div className="flex items-center justify-center relative">
          <div className="flex items-center pl-1  w-full justify-center ">
            {!toggleCollapse && (
              <Image height={20} width={150} alt="zonemates" src={Logo} />
            )}
          </div>
          {isCollapsible && (
            <button
              // className={collapseIconClasses}
              className={`p-4 rounded   absolute right-0  ${
                toggleCollapse && "rotate-180"
              }`}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col  mt-24 list-none text-white">
          {menuItems.map((el, i) => {
            // console.log(el.link)
            return (
              el.link !== "#" && (
                <Link
                  href={el.link}
                  key={i}
                  className="my-3 flex items-center space-x-2 relative"
                >
                  <div
                    className={`h-8 w-2 rounded-2xl ${
                      el.link !== router.pathname && "hidden"
                    } bg-white absolute -left-4`}
                  ></div>
                  {<el.icon />}
                  {!toggleCollapse && (
                    <span className="text-lg">{el.label}</span>
                  )}
                </Link>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
