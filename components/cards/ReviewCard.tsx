import React, { useState } from "react";
import { EditIcon,ReportIcon  } from "../icons/reviewsIcons";
import { Rating } from 'react-simple-star-rating';
import Image from "next/image";

type ImageType = {
  src?: string;
};
export interface ReviewCardProps {
  image?: ImageType;
  name?: string;
  starRating?: number;
  date?: string | undefined;
  reviewText?: string;
  companyName?: string;
  companyDesc?: string;
  status?: any;
}
const ReviewCard: React.FC<ReviewCardProps> = ({
  image,
  name,
  starRating,
  date,
  reviewText,
  companyName,
  companyDesc,
  status,
}) => {
  let myimage = image?.src as string;

  return (
    <div className="flex my-5 border rounded border-black border-opacity-10 p-4">
      <div className="w-3/5">
        <div className="flex  space-x-5 items-center">

          <Image alt="sleekride" height={50} width={50}   src={myimage} />
         <div>
         <h1 className="-mb-2 text-lg font-semibold">{name}</h1>
         <Rating initialValue={starRating} size={20}  readonly={true} fillColor={'#E67136'}/>
          <h1>{date}</h1>
         </div>
          
        </div>
        <div className="mt-5 p-2">
          <p>{reviewText}</p>
          <div className="mt-5 ">
          <h1 className="text-md font-semibold underline">{companyName}</h1>
          <p className="mt-1">{companyDesc}</p>
          </div>     
        </div>
      </div>
      <div className="w-1/5">
        <h1 className="font-semibold">{status?.title}</h1>
        <h1 className="text-sm text-secondary">{status?.desc}</h1>
      </div>
      <div className="w-1/5 flex flex-col items-center pt-5  ">
        <button className="flex items-center space-x-2 border  border-lightgrey border-opacity-20 rounded shadow-md m-2 p-2 w-4/5"><EditIcon/> <h1>Edit Response </h1></button>
        <button className="flex items-center space-x-2 border  border-lightgrey border-opacity-20 rounded shadow-md m-2 p-2 w-4/5 text-red"><ReportIcon /><h1>Report Review</h1></button>
      </div>
    </div>
  );
};

export default ReviewCard;
