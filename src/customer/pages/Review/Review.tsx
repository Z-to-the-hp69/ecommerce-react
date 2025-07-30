import React from "react";
import ReviewCard from "./ReviewCard";
import { Divider } from "@mui/material";

const Review = () => {
  return (
    <div className="p-5 lg:px-20 flex flex-col lg:flex-row gap-20">
      <section className="w-full md:w-1/2  lg:w-[30%]  space-y-2">
        <img
          src="https://www.highcultured.com.mm/web/image/product.template/5639/image_512/High%20Matrix%20Logo%20Loose%20Tee%20-%201074?unique=6dcc0df"
          alt=""
        />
        <div>
          <div>
            <p className="font-bold  text-xl">High Culture</p>
            <p className="text-lg text-pink-300">Girl White Tee</p>
          </div>

          <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl ">
              <span className="font-semibold text-gray-800 ">40000Ks</span>
              <span className="line-through text-gray-400 ">45000Ks</span>
              <span className="text-primary font-semibold">50%</span>
            </div>
            <p className="text-sm ">
              Inclusive pricing. Get free shipping on orders above 2Lakhs
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-5 w-full">
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <div className="space-y-3">
            <ReviewCard />
            <Divider />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Review;
