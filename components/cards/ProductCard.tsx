import Image from "next/image";
import React ,{useState} from "react";
import { TrendUp } from "../icons/analysisIcons";

type ImageType={
    src?: string;
}
export interface ProductCardProps {
    image?: ImageType;
    title?: string;
    price?: number;
  mileage?: number;
  regNo?:string;
  stockNo?: number;
  daysInMarket?: number;
  options?:Array<string>;
  instantMarketValue?: number;
  dealType?:string;
  newPrice?: number;
  savings?: number;
  searchRank?: number;
}
const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  mileage,
  regNo,
  stockNo,
  daysInMarket,
  options,
  instantMarketValue,
  dealType,
  newPrice,
  savings,
  searchRank

}) => {
    const [priceRange,setPriceRange] = useState(10);
    let myimage = image?.src as string;
  return (
    <div
      className=" my-5 border-lightgrey border-2 rounded-xl shadow-lg">
        <div className="m-0 w-full  rounded-tl-xl flex ">
            <Image alt="sleekride" height={700} width={500} src={myimage}   />
            <div className="p-4 w-3/5">
                <h1 className="text-lg font-semibold">{title}</h1>
                <div className="flex justify-between">
                <h1 className="w-1/2 mt-1 font-semibold"  >Price: </h1> <h2 className="w-1/2 mt-1" >${price}</h2>
                </div>
                <div className="flex justify-between">
                <h1 className="w-1/2 mt-1 font-semibold"  >Mileage:</h1><h2 className="w-1/2 mt-1" >${mileage}</h2>
                </div>
                <div className="flex justify-between">
                <h1 className="w-1/2 mt-1 font-semibold"  >Reg:</h1><h2 className="w-1/2 mt-1" >${regNo}</h2>
                </div>
                <div className="flex justify-between">
                <h1 className="w-1/2 mt-1 font-semibold"  >Stock No:</h1><h2 className="w-1/2 mt-1" >${stockNo}</h2>
                </div>
                <div className="flex justify-between">
                <h1 className="w-1/2 mt-1 font-semibold"  >Days in market:</h1><h2 className="w-1/2 mt-1" >${daysInMarket} Days at dealership</h2>
                </div> 
                
            </div>
            <div className="p-4 w-2/5">
                <div className="flex space-x-4 ">
                <h1 className="w-1/5 mt-1 font-semibold"  >Options: </h1> <ul className="w-3/5 mt-1" >{options?.map((el,index)  => {return <li key={index} className="w-full">{el}</li>} )}</ul>
                </div>
                 
                
            </div>
        </div>
          
        
        <div className="my-5 mx-10  border-lightgrey border-t  ">
        <h1 className="text-lg underline underline-offset-3 font-semibold inline mr-20 ">Instant Market Value:</h1> <span className="text-lg font-semibold">${instantMarketValue}</span>
        
        <div className="my-5 flex">
        <div id='dealtype' className="flex flex-col items-center border-r-2 border-r-grey  w-1/5">
                <h1>{dealType}</h1>
                <TrendUp />
        </div>
        
        <div  className=" w-1/5 ml-10 ">
        <div className="flex space-x-4">
                <h1 className="w-1/2 mt-1 font-semibold"  >New Price: </h1> <h2 className="w-1/2 mt-1 font-semibold text-red" >${newPrice}</h2>
                </div>
                <div className="flex space-x-4">
                <h1 className="w-1/2 mt-1 font-semibold"  >Savings: </h1> <h2 className="w-1/2 mt-1 font-semibold text-red" >${savings}</h2>
        </div>
        </div>

        <div  className=" w-2/5 ml-10 ">
        <div className="flex ">
                <h1 className=" mt-1  mr-10 text-grey"  >Search Rank: </h1> <h2 className=" mt-1  " >{searchRank} out of 250</h2>
                </div>
                <div className="flex ">
                <h1 className=" mt-1 mr-10 text-grey"  >Search Rank: </h1> <h2 className=" mt-1 " >{searchRank} out of 250</h2>
        </div>
        </div>

       

        </div> 
        <div id='priceSlider'>
        Price:
        <input  type="range" value={priceRange} onChange={(e)=>setPriceRange(parseInt(e.target.value))} className="w-full h-4 bg-lightgrey  rounded-lg appearance-none cursor-pointer accent-secondary  "></input>
        </div>
        </div>
    
    
    </div>
  );
};

export default ProductCard;
