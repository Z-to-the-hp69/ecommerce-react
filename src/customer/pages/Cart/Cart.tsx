import React, { useEffect, useState } from "react";
import CartItem from "./CartItemCard";
import { Close, LocalOffer } from "@mui/icons-material";
import { pink, red } from "@mui/material/colors";
import { Button, Divider, IconButton, TextField } from "@mui/material";
import PricingCart from "./PricingCart";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { fetchUserCart } from "../../../State/customer/cartSice";

import CartItemCard from "./CartItemCard";
import CartHeader from "./CartHeader";

const Cart = () => {
  const [couponCode, setCouponCode] = useState("");
  const navigate = useNavigate();
  const handleChange = (e: any) => {
    setCouponCode(e.target.value);
  };

  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((store) => store);

  useEffect(() => {
    dispatch(fetchUserCart(localStorage.getItem("jwt") || ""));
  }, []);
  // const jwt = localStorage.getItem("jwt");
  // useEffect(() => {
  //   if (jwt) {
  //     dispatch(fetchUserCart(jwt));
  //   }
  // }, [dispatch, jwt]);

  return (
    <div className="pt-10 px-5 sm:px-10 md:px-60 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="cartItemSection lg:col-span-2 space-y-3">
          {cart.cart?.cartItems.map((item, index) => (
            <CartItemCard key={index} item={item} />
          ))}
          {/* {cart.cart?.cartItems.map((item, index) => (
            <CartItemCard key={index} item={item} jwt={jwt} />
          ))} */}
        </div>

        <div className="col-span-1 text-sm space-y-3 ">
          <div className="border rounded-md px-5  py-3 space-y-5">
            <div className="flex gap-3 text-sm items-center">
              <div className="flex gap-3 text-sm items-center">
                <LocalOffer sx={{ color: pink, font: "17px" }} />
              </div>
              <span>Apply Coupon</span>
            </div>

            {true ? (
              <div className="flex justify-between items-center">
                <TextField
                  onChange={handleChange}
                  placeholder="coupon code"
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                />
                <Button size="small" sx={{ color: "red" }}>
                  Apply
                </Button>
              </div>
            ) : (
              <div className="flex">
                <div className="p-1 pl-5 pr-3 border rounded-md  flex gap-2 items-center">
                  <span className="">HSU26 Applied</span>
                  <IconButton size="small">
                    <Close className="text-red-600" />
                  </IconButton>
                </div>
              </div>
            )}
          </div>

          <div className="border rounded-md">
            <PricingCart />
            <div className="p-5">
              <Button
                fullWidth
                variant="contained"
                sx={{ py: "11px" }}
                onClick={() => navigate("/checkout")}
              >
                Buy now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
