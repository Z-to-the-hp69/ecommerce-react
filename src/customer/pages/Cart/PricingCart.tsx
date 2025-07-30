import { Divider } from "@mui/material";
import React from "react";

const PricingCart = () => {
  return (
    <>
      <div className="space-y-3 p-5">
        <div className="flex justify-between items-center">
          <span>Subtotal</span>
          <span>30000Ks</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Discount</span>
          <span>28000Ks</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Shipping</span>
          <span>2800Ks</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Plateform </span>
          <span>Free</span>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between items-center p-5 text-orange-700">
        <span>Total</span>
        <span>320000Ks</span>
      </div>
    </>
  );
};

export default PricingCart;
