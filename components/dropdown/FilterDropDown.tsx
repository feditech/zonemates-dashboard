import React, { Fragment } from "react";
import { Popover } from "@mui/material";
import { RightArrowIcon, DownArrowIcon } from "../icons/pricingToolsIcon";
import MultiRangeSlider from "../slider/MultiRangeSlider";
import DealRatingDropDown from "./DealRatingDropDown";

const FilterDropDown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const profileOpen = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="w-[130px] h-[40px] flex justify-around items-center text-white bg-secondary rounded-md"
      >
        Find <RightArrowIcon />
      </button>
      <Popover
        open={profileOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{ borderRadius: "100%" }}
      >
        <ul className={"  p-4 text-grey  "}>
          <ul className="py-2">
            <li className={` border-grey border-b border-opacity-30`}>
              <h1>Price</h1>
              <MultiRangeSlider
                min={0}
                max={1000}
                type="$"
                onChange={({ min, max }: { min: number; max: number }) =>
                  console.log(`min = ${min}, max = ${max}`)
                }
              />
            </li>
          </ul>

          <ul className="py-2">
            <li className={` border-grey border-b border-opacity-30`}>
              <h1>Mileage</h1>
              <MultiRangeSlider
                min={0}
                max={1000}
                type="miles"
                onChange={({ min, max }: { min: number; max: number }) =>
                  console.log(`min = ${min}, max = ${max}`)
                }
              />
            </li>
          </ul>

          <ul className="py-2">
            <li className={` border-grey border-b border-opacity-30 pb-4`}>
              <h1>Mileage</h1>
              <div className="border border-grey rounded-lg p-2 ">
                <button className="rounded w-1/5 text-center">Any</button>
                <button className="rounded w-2/5 text-center">Manual</button>
                <button className="rounded w-2/5 text-center">Automatic</button>
              </div>
            </li>
          </ul>

          <ul className="py-2">
            <li className={` border-grey border-b border-opacity-30`}>
              <div className="flex justify-between">
                <h1>Color</h1> <button>clear</button>
              </div>
              <ul>
                <li className="rounded flex items-center p-1 border border-grey border-opacity-30 mt-2 gap-x-4">
                  <input type="checkbox" className="h-4 w-4 accent-primary" />
                  <span className="text-primary">Black</span> <span>(5)</span>{" "}
                </li>
                <li className="rounded flex items-center p-1 border border-grey border-opacity-30 mt-2 gap-x-4">
                  <input type="checkbox" className="h-4 w-4 accent-primary" />
                  <span className="text-primary">Black</span> <span>(5)</span>{" "}
                </li>
                <li className="rounded flex items-center p-1 border border-grey border-opacity-30 mt-2 gap-x-4">
                  <input type="checkbox" className="h-4 w-4 accent-primary" />
                  <span className="text-primary">Black</span> <span>(5)</span>{" "}
                </li>
                <li className="rounded flex items-center p-1 border border-grey border-opacity-30 mt-2 gap-x-4">
                  <input type="checkbox" className="h-4 w-4 accent-primary" />
                  <span className="text-primary">Black</span> <span>(5)</span>{" "}
                </li>
                <li className="rounded flex items-center p-1 border border-grey border-opacity-30 mt-2 gap-x-4">
                  <input type="checkbox" className="h-4 w-4 accent-primary" />
                  <span className="text-primary">Black</span> <span>(5)</span>{" "}
                </li>
                <li className="rounded flex items-center p-1 border border-grey border-opacity-30 mt-2 gap-x-4">
                  <input type="checkbox" className="h-4 w-4 accent-primary" />
                  <span className="text-primary">Black</span> <span>(5)</span>{" "}
                </li>
                <li className="rounded flex items-center p-1 border border-grey border-opacity-30 mt-2 gap-x-4">
                  <input type="checkbox" className="h-4 w-4 accent-primary" />
                  <span className="text-primary">Black</span> <span>(5)</span>{" "}
                </li>
                <li className="rounded flex items-center p-1 border border-grey border-opacity-30 mt-2 gap-x-4">
                  <input type="checkbox" className="h-4 w-4 accent-primary" />
                  <span className="text-primary">Black</span> <span>(5)</span>{" "}
                </li>
                <li className="rounded flex items-center p-1 border border-grey border-opacity-30 mt-2 gap-x-4">
                  <input type="checkbox" className="h-4 w-4 accent-primary" />
                  <span className="text-primary">Black</span> <span>(5)</span>{" "}
                </li>
              </ul>
            </li>
          </ul>

          <ul className="py-2">
            <li className={` border-grey border-b border-opacity-30`}>
              <div className="  relative w-full">
                <h1>Deal Rating</h1>

                <span className="absolute top-0 right-0">
                  <DealRatingDropDown />
                </span>
              </div>
            </li>
          </ul>



        </ul>
      </Popover>
    </>
  );
};

export default FilterDropDown;
