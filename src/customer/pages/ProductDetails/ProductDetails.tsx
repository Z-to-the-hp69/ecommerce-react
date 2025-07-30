import {
  AddIcCall,
  AddShoppingCart,
  FavoriteBorder,
  LocalShipping,
  Remove,
  Shield,
  StairsRounded,
  Wallet,
  WorkspacePremium,
} from "@mui/icons-material";
import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { pink } from "@mui/material/colors";
import { Button, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SimilartProductCard from "./SimilartProductCard";
import SimilarProcut from "./SimilarProcut";
import ReviewCard from "../Review/ReviewCard";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="px-5 lg:px-20  pt-10">
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {[1, 1, 1, 1].map((item) => (
              <img
                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                src="https://www.highcultured.com.mm/web/image/product.image/627/image_1024/11107425-MODEL-03.webp?unique=1f18660"
              />
            ))}
          </div>
          <div className="w-full  lg:w-[85%]">
            <img
              className="w-full  rounded-md"
              src="https://www.highcultured.com.mm/web/image/product.template/5639/image_512/High%20Matrix%20Logo%20Loose%20Tee%20-%201074?unique=6dcc0df"
              alt=""
            />
          </div>
        </section>

        <section>
          <h1 className="font-bold text-lg text-pink-600">High Culture</h1>
          <p className="text-gray-500 font-semibold">Girl Tee</p>
          <div className="flex justify-between items-center py-2  border  w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center">
              <span>4</span>
              <StarIcon sx={{ color: pink[500], fontSize: "17px" }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <span>234 ratings</span>
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
          <div className="mt-7  space-y-3">
            <div className="flex items-center gap-4">
              <Shield
                sx={{
                  color: pink[600],
                }}
              />
              <p>Authentic & Quality Assure</p>
            </div>

            <div className="flex items-center gap-4">
              <WorkspacePremium
                sx={{
                  color: pink[600],
                }}
              />
              <p>Full Refund If You're Not Satisfied</p>
            </div>

            <div className="flex items-center gap-4">
              <LocalShipping
                sx={{
                  color: pink[600],
                }}
              />
              <p>Free Shipping & Return</p>
            </div>

            <div className="flex items-center gap-4">
              <Wallet
                sx={{
                  color: pink[600],
                }}
              />
              <p>Cash on Delivery might be available</p>
            </div>
          </div>

          <div className="mt-7 space-y-2">
            <h1>Quantity</h1>

            <div className=" flex  items-center gap-2 w-[140px] justify-between">
              <Button
                disabled={quantity === 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <Remove />
              </Button>
              <span>{quantity}</span>
              <Button onClick={() => setQuantity(quantity + 1)}>
                <AddIcon />
              </Button>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <Button
              fullWidth
              variant="contained"
              startIcon={<AddShoppingCart />}
              sx={{ py: "1rem" }}
            >
              Add to Bag
            </Button>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<FavoriteBorder />}
              sx={{ py: "1rem" }}
            >
              wishlist
            </Button>
          </div>

          <div>
            <p>
              Soft, comfortable, and easy to wear—this tee is perfect for
              everyday style. Made with breathable fabric and a clean fit that
              pairs with anything.
            </p>
          </div>

          <div className="mt-12  space-y-5">
            <ReviewCard />
            <Divider />
          </div>
        </section>
      </div>

      <div>
        <h1 className="text-lg font-bold">Similar Product</h1>

        <div className="pt-5 ">
          <SimilarProcut />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
