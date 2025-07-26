import React from "react";
//import { gentLevelTwo } from "../../../data/category/level two/gentLevelTwo";
import { femalefashionLevelTwo } from "../../../data/category/level two/femalefashionLevelTwo";
import { interiorsLevelTwo } from "../../../data/category/level two/interiorsLevelTwo";
import { digitaldevicesLevelTwo } from "../../../data/category/level two/digitaldevicesLevelTwo";

//import { gentLevelThree } from "../../../data/category/level three/menswearLevelThree";
import { femalefashionLevelThree } from "../../../data/category/level three/femalefashionLevelThree";
import { interiorsLevelThree } from "../../../data/category/level three/interiorsLevelThree";
import { digitaldevicesLevelThree } from "../../../data/category/level three/digitaldevicesLevelThree";
import Box from "@mui/material/Box";
import { gentLevelTwo } from "../../../data/category/level two/gentLevelTwo";
import { gentLevelThree } from "../../../data/category/level three/gentLevelThree";

const categoryTwo: { [key: string]: any[] } = {
  gents: gentLevelTwo,
  femalefashion: femalefashionLevelTwo,
  interiors: interiorsLevelTwo,
  digitaldevices: digitaldevicesLevelTwo,
};

const categoryThree: { [key: string]: any[] } = {
  gents: gentLevelThree,
  femalefashion: femalefashionLevelThree,
  interiors: interiorsLevelThree,
  digitaldevices: digitaldevicesLevelThree,
};

const CategorySheet = ({ selectedCategory, setShowCategory }: any) => {
  const childCategory = (category: any, parentCategoryId: any) => {
    return category.filter(
      (child: any) => child.parentCategoryId === parentCategoryId
    );
  };
  return (
    <Box
      sx={{ zIndex: 2 }}
      className="bg-white shadow-lg  lg:h-[500px] overflow-y-auto"
    >
      {/* <div className="flex text-sm flex-wrap"> */}
      <div className="flex text-sm flex-wrap gap-x-11 gap-y-11">
        {categoryTwo[selectedCategory]?.map((item, index) => (
          <div
            className={`p-8 lg:w-[20%] ${
              index % 2 === 0 ? "bg-slate-50" : "bg-white"
            }`}
          >
            <p className="text-red-950  mb-5 font-semibold ">{item.name}</p>
            <ul className="space-y-3">
              {childCategory(
                categoryThree[selectedCategory],
                item.categoryId
              ).map((item: any) => (
                <div>
                  <li className="hover:text-pink-900 cursor-pointer text-justify ">
                    {item.name}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default CategorySheet;
