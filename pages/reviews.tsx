import React from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Layout from "../components/Layout";
import ReviewCard from "../components/cards/ReviewCard";
import profile from "../public/profile.png";

const data = {
  image: profile,
  name: "Malesuada",
  date: "11/18/2022",
  starRating: 5,
  reviewText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien vitae nulla ac orci cras. Ut a, id blandit massa. Sed morbi mauris pulvinar et suspendisse tempus convallis massa. Justo, mi eleifend amet, feugiat ipsum. ",
    companyName:'Toyota Canal Moters',
    companyDesc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien vitae nulla ac orci cras. Ut a, id blandit massa. Sed morbi mauris pulvinar',
  status:{
    title:'Review is published',
    desc:'Response has been published'
  }
};

const Reviews = () => {
  return (
    <Layout>
      <div>
        <DashboardHeader title="Manage Reviews" />

        <div className="rounded-3xl border border-grey border-opacity-30 shadow-md  mx-2 p-4">
          <div className="flex p-4">
            <h1 className="w-3/5">Sale Reviews</h1>
            <h1 className="w-1/5">Status</h1>
            <h1 className="w-1/5 ">Action</h1>
          </div>
          <ReviewCard
            image={data.image}
            name={data.name}
            date={data.date}
            starRating={data.starRating}
            reviewText={data.reviewText}
            companyName={data.companyName}
            companyDesc={data.companyDesc}
            status={data.status}
          />
          <ReviewCard
            image={data.image}
            name={data.name}
            date={data.date}
            starRating={data.starRating}
            reviewText={data.reviewText}
            companyName={data.companyName}
            companyDesc={data.companyDesc}
            status={data.status}
          />
          <ReviewCard
            image={data.image}
            name={data.name}
            date={data.date}
            starRating={data.starRating}
            reviewText={data.reviewText}
            companyName={data.companyName}
            companyDesc={data.companyDesc}
            status={data.status}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Reviews;
