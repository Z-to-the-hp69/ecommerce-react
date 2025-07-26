import React from "react";
import ElectricCategory from "./ElectricCategory/ElectricCategory";
import CategoryGrid from "./CategoryGrid/CategoryGrid";
import Deal from "./Deal/Deal";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import logo from "./logo.jpeg";
import { Button } from "@mui/material";
import { Storefront } from "@mui/icons-material";
import taurus from "./taurus.png";

const Home = () => {
  return (
    <>
      <div className="relative pb-20 space-y-5 lg:space-y-10">
        <ElectricCategory />
        <CategoryGrid />

        <div className="pt-20">
          <h1 className="pb-5 text-lg font-bold text-center lg:text-4xl text-primary-color lg:pb-10">
            TODAY'S DEALS
          </h1>
          <Deal />
        </div>

        <section className="py-20">
          <h1 className="pb-5 text-lg font-bold text-center lg:text-4xl text-primary-color lg:pb-10">
            SHOP BY CATEGORY
          </h1>
          <ShopByCategory />
        </section>

        <section className=" lg:px-20 relative h-[200px] lg:h-[450px] object-cover">
          <img
            className="w-full h-full"
            src={taurus}
            alt=""
          />
          <div className="absolute top-1/3 left-4 lg:left-[15rem]  transform-translate-y-1/2 font-semibold lg:text-4xl space-y-3">
            <h1>Sell your product</h1>
            <p className="text-lg md:text-2xl">
              With
              <span className="text-black logo">Taurus Fifteen</span>
            </p>
            <div className="flex justify-center pt-6">
              <Button startIcon={<Storefront />} variant="contained">
                Become Seller
              </Button>
            </div>
          </div>
        </section>
        {/* <section className="lg:px-20 relative h-[200px] lg:h-[450px] object-cover">
          <img
            className="object-cover w-full h-full"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/295/823/small/abstract-white-fluid-wave-banner-template-free-vector.jpg"
            alt=""
          />

          <div className="absolute flex items-center space-x-6 transform -translate-y-1/2 top-1/2 left-6 lg:left-20">
            <img
              src={logo}
              alt="Taurus Fifteen Logo"
              className="w-auto h-16 lg:h-28"
            />

            <div className="text-gray-800">
              <h1 className="text-xl font-bold lg:text-4xl">
                Sell your product
              </h1>
              <p className="p-3 text-sm lg:text-2xl">
                With
                <span className="text-black logo">Taurus Fifteen</span>
              </p>
            </div>

            <div className="justify-center pt-6 flext ">
              <Button startIcon={<Storefront />} variant="contained">
                Become Seller
              </Button>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default Home;
