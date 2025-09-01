import React from "react";
import { HomeCategory } from "../../../../types/HomeCategoryTypes";

const ElectricCategoryCard = ({ item }: { item: HomeCategory }) => {
  console.log("item", item.image);

  return (
    <div>
      <img
        className="object-contain h-10"
        //  src="https://w7.pngwing.com/pngs/104/1000/png-transparent-macbook-pro-laptop-intel-apple-macbook-electronics-netbook-computer.png"
        src={item.image}
        alt=""
      />

      <h2 className="font-semibold text-sm">{item.name}</h2>
    </div>
  );
};

export default ElectricCategoryCard;
