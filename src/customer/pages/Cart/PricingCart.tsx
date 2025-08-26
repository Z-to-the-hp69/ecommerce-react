// import { Divider } from "@mui/material";
// import React from "react";

// const PricingCart = () => {
//   return (
//     <>
//       <div className="space-y-3 p-5">
//         <div className="flex justify-between items-center">
//           <span>Subtotal</span>
//           <span>30000Ks</span>
//         </div>

//         <div className="flex justify-between items-center">
//           <span>Discount</span>
//           <span>28000Ks</span>
//         </div>

//         <div className="flex justify-between items-center">
//           <span>Shipping</span>
//           <span>2800Ks</span>
//         </div>

//         <div className="flex justify-between items-center">
//           <span>Plateform </span>
//           <span>Free</span>
//         </div>
//       </div>
//       <Divider />
//       <div className="flex justify-between items-center p-5 text-orange-700">
//         <span>Total</span>
//         <span>320000Ks</span>
//       </div>
//     </>
//   );
// };

// export default PricingCart;
import { Divider } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../State/Store"; // adjust path if different

const PricingCart = () => {
  const cart = useAppSelector((store) => store.cart.cart);

  // Fallback if cart is empty
  if (!cart) {
    return (
      <div className="p-5">
        <p>Your cart is empty.</p>
      </div>
    );
  }

  // Extract dynamic values from cart
  const subtotal = cart.totalMrpPrice || 0;
  const discount = (cart.totalMrpPrice || 0) - (cart.totalSellingPrice || 0);
  const shipping = cart.totalSellingPrice > 0 ? 2800 : 0; // example shipping logic
  const platform = 0;
  const total = (cart.totalSellingPrice || 0) + shipping;

  return (
    <>
      <div className="space-y-3 p-5">
        <div className="flex justify-between items-center">
          <span>Subtotal</span>
          <span>{subtotal} Ks</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Discount</span>
          <span>{discount} Ks</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Shipping</span>
          <span>{shipping} Ks</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Platform</span>
          <span>{platform === 0 ? "Free" : `${platform} Ks`}</span>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between items-center p-5 text-orange-700">
        <span>Total</span>
        <span>{total} Ks</span>
      </div>
    </>
  );
};

export default PricingCart;
