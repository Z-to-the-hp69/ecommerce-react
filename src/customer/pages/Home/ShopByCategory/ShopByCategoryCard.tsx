import React from "react";
import "./ShopByCategory.css";
const ShopByCategoryCard = () => {
  return (
    <div className="flex  gap-3 flex-col  justify-center items-center group cursor-pointer">
      <div className="custom-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-primary-color">
        <img
          className=" rounded-full  group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full"
          src="https://www.sencor.com/getmedia/48870e93-9c5a-4100-a72a-6d7124e19f87/41015814_1.jpg.aspx?width=2100&height=2100&ext=.jpg"
          alt=""
        />
      </div>
      <h1>Kitchen & Table</h1>
    </div>
  );
};

export default ShopByCategoryCard;
