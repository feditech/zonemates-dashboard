
import React from "react";
import { DownArrowIcon } from "../icons/pricingToolsIcon";
import { GoodDealIcon,GreatDealIcon,FairPriceIcon,OverPriceIcon } from "../icons/pricingToolsIcon/dealIcon";

import Popper from "@popperjs/core";

const Dropdown = ({ }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    // new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
    //   placement: "bottom-start"
    // });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors

  return (
    <>
 
        <div className= {(dropdownPopoverShow ? "   " : " ")+""}>
          <div className=" flex flex-col items-end  ">
            <button
              className={
                "text-white font-bold uppercase text-sm   rounded outline-none focus:outline-none mr-1 mb-1 "
              }
              style={{ transition: "all .15s ease" }}
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
             <DownArrowIcon />
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "flex " : "hidden ") +
                "text-base z-50   py-2 list-none  mt-1 flex flex-col "
              }
              style={{ minWidth: "200px" }}
            >
             
             <ul className="">
              
               
                <li className="rounded flex items-center p-1 border border-grey border-opacity-30 mt-2 gap-x-4">
                <GreatDealIcon />
                   <div><span className="text-primary">Great Deal</span> <span>(5)</span></div>
                  <input type="checkbox" className="h-4 w-4 accent-primary" />
                </li>
                <li className="rounded flex items-center p-1 border border-grey border-opacity-30 mt-2 gap-x-4">
                <GoodDealIcon />
                  <div><span className="text-primary">Good Deal</span> <span>(5)</span>
</div>                  <input type="checkbox" className="h-4 w-4 accent-primary" />
                </li>
                <li className="rounded flex items-center p-1 border border-grey border-opacity-30 mt-2 gap-x-4">
                  <FairPriceIcon />
                  <div><span className="text-primary">Fair Price</span> <span>(5)</span></div>
                  <input type="checkbox" className="h-4 w-4 accent-primary" />
                </li>
                <li className="rounded flex items-center p-1 border border-grey border-opacity-30 mt-2 gap-x-4">
                  <OverPriceIcon />
                  <div><span className="text-primary">Over Price</span> <span>(5)</span></div>
                  <input type="checkbox" className="h-4 w-4 accent-primary" />
                </li>
              </ul>
             
             
             
             
             
             
             
             
             
             
              {/* <a
                href="#pablo"
                className={
                  "text-sm text-right py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " 
                }
                onClick={e => e.preventDefault()}
              >
                Action
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm text-right py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " 
                }
                onClick={e => e.preventDefault()}
              >
                Another action
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm text-right py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " 
                }
                onClick={e => e.preventDefault()}
              >
                Something else here
              </a> */}
           
            </div>
          </div>
        </div>

    </>
  );
};

export default function DropdownRender() {
  return (
    <>
      <Dropdown color="orange" />
    </>
  );
}

{/* <div className="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25" />
<a
  href="#pablo"
  className={
    "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " 
  }
  onClick={e => e.preventDefault()}
>
  Seprated link
</a> */}















// import React, { Fragment } from "react";
// import {  Popover } from "@mui/material";
// import Link from "next/link";
// import Avatar from "@mui/material/Avatar";
// import { DropDownIcon } from "../icons/navbarIcons";
// import { GoodDealIcon,GreatDealIcon,FairPriceIcon,OverPriceIcon } from "../icons/pricingToolsIcon/dealIcon";
// const ProfileDropDown = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const profileOpen = Boolean(anchorEl);
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleClick = (event: any) => {
//     setAnchorEl(event.currentTarget);
//   };

//   return (
//     <>
//       <button onClick={handleClick} className='flex  items-center '>
//         <DropDownIcon />
//       </button>
//       <Popover
//         open={profileOpen}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "center",
//         }}
//         sx={{borderRadius:'100%'}}
//       >
//         <ul className={"  p-4 text-grey "}>
//           <li className={` border-grey border-b border-opacity-30`}>
//             <button onClick={() => setAnchorEl(null)}  className="p-2 ">
//               <GreatDealIcon /> <p className=" ">Great Deal (12) </p> <input type="checkbox" className="h-4 w-4 accent-primary" />
//             </button>
//           </li>
          
//         </ul>
//       </Popover>
//     </>
//   );
// };

// export default ProfileDropDown;




