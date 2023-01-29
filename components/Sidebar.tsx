import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import "../styles/Sidebar.module.css";
import Logo from "../public/Logo.png";

import {
  ReviewsIcon,
  CollapsIcon,
  HomeIcon,
  PricingToolIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  BillingIcon,
} from "./icons";

import Image from "next/image";
const menuItems = [
  {
    id: 3,
    label: "Bookings",
    icon: PricingToolIcon,
    link: "/bookings",
    sublinks: [],
  },
  {
    id: 3,
    label: "Games Management",
    icon: PricingToolIcon,
    link: "/gamemanagement",
    sublinks: [],
  },
  {
    id: 3,
    label: "Revenue Management",
    icon: PricingToolIcon,
    link: "/revenuemanagement",
    sublinks: [],
  },
  {
    id: 4,
    label: "Reviews",
    icon: ReviewsIcon,
    link: "/reviews",
    sublinks: [],
  },
  {
    id: 6,
    label: "Settings",
    icon: BillingIcon,
    link: "/setting",
    sublinks: [],
  },
];

const Sidebar = () => {
  const router = useRouter();
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const [toggleDashboard, setToggleDashboard] = useState(
    "/" === router.pathname || "/dealer-insights" === router.pathname
  );
  const [toggleMarket, setToggleMarket] = useState(
    "/high-demand-car" === router.pathname ||
      "/local-searches" === router.pathname
  );

  const activeMenu = useMemo(() => {
    menuItems;
    return menuItems.find((menu) => menu.link === router.pathname);
  }, [router.pathname]);

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };
  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };
  return (
    <div
      // className={wrapperClasses}
      className={`Sidebar h-screen overflow-auto  px-4 pt-8 pb-4  thin-scroll bg-primary flex justify-between flex-col  ${
        !toggleCollapse && "w-80"
      } ${toggleCollapse && "w-20 justify-center"}    `}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col  ">
        <div className="flex items-center justify-center relative">
          <div className="flex items-center pl-1  w-full justify-center ">
            <Image height={20} width={150} alt="zonemates" src={Logo} />
          </div>
          {/* {!isCollapsible && (
            <button
              // className={collapseIconClasses}
              className={`p-4 rounded  bg-secondary  absolute right-0  ${toggleCollapse && 'rotate-180'}`}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )} */}
        </div>

        <div className="flex flex-col  mt-24 list-none text-white">
          <div>
            <div
              className="my-3 flex items-center  relative"
              onClick={() => setToggleDashboard(!toggleDashboard)}
            >
              <div
                className={` ${
                  "/" === router.pathname ||
                  "/dealer-insights" === router.pathname
                    ? "h-8 w-2 rounded-2xl bg-secondary absolute -left-4 "
                    : " hidden "
                } `}
              ></div>
              <div
                className="flex items-center justify-between w-full "
                // onClick={() => setToggleDashboard(!toggleDashboard)}
              >
                <div className="flex items-center space-x-2 cursor-pointer">
                  {<HomeIcon />}{" "}
                  <span className="text-lg w-full">Dashboard</span>
                </div>
                {toggleDashboard ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </div>
            </div>
            <div
              className={`flex flex-col ml-4 ${!toggleDashboard && "hidden"}  `}
            >
              <Link
                href={"/"}
                className={`my-2 ml-2 pl-3 ${
                  router.pathname == "/" &&
                  "border-l-2 border-b-2  border-l-secondary border-b-secondary"
                }`}
              >
                Booking Summary
              </Link>
            </div>
          </div>

          {/* <div>
            <div
              className="my-3 flex items-center  relative"
              onClick={() => setToggleMarket(!toggleMarket)}
            >
              <div
                className={` ${
                  "/high-demand-car" === router.pathname ||
                  "/local-searches" === router.pathname
                    ? "h-8 w-2 rounded-2xl bg-secondary absolute -left-4 "
                    : " hidden "
                } `}
              ></div>
              <div
                className="flex items-center justify-between w-full "
                // onClick={() => setToggleMarket(!toggleMarket)}
              >
                <div className="flex items-center space-x-2 cursor-pointer">
                  {<MarketAnalysis />}{" "}
                  <span className="text-lg">Market Analysis</span>
                </div>
                {toggleMarket ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </div>
            </div>
            <div className={`flex flex-col ml-4 ${!toggleMarket && "hidden"}`}>
              <Link
                href={"/high-demand-car"}
                className={`my-2 ml-2 pl-3 ${
                  router.pathname == "/high-demand-car" &&
                  "border-l-2 border-b-2  border-l-secondary border-b-secondary"
                }`}
              >
                High Demand Car
              </Link>
              <Link
                href={"/local-searches"}
                className={`my-2 ml-2 pl-3 ${
                  router.pathname == "/local-searches" &&
                  "border-l-2 border-b-2  border-l-secondary border-b-secondary"
                }`}
              >
                Local Searches
              </Link>
            </div>
          </div> */}

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
                    } bg-[#105e26] absolute -left-4`}
                  ></div>
                  {<el.icon />} <span className="text-lg">{el.label}</span>
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
