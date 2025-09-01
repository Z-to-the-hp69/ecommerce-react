import React from "react";
import ElectricCategoryCard from "./ElectricCategoryCard";
import store, { useAppSelector } from "../../../../State/Store";

const ElectricCategory = () => {
  const { customer } = useAppSelector((store) => store);
  return (
    <div className="flex flex-wrap justify-between py-5 lg:px-20 border-b">
      {/* {[1, 1, 1, 1, 1, 1, 1].map((item) => (
        <ElectricCategoryCard />
      ))} */}
      {customer.homePageData?.electricCategories.map((item) => (
        <ElectricCategoryCard item={item} />
      ))}
    </div>
  );
};

export default ElectricCategory;
