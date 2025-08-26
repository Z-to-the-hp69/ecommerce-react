import React from "react";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppSelector } from "../../../State/Store";

const CartHeader = () => {
  const cart = useAppSelector((store) => store.cart.cart);

  // count total items in cart
  const itemCount =
    cart?.cartItems?.reduce(
      (acc: number, item: any) => acc + item.quantity,
      0
    ) || 0;

  return (
    <div className="flex justify-center items-center p-4">
      <IconButton>
        <Badge
          badgeContent={itemCount}
          color="error"
          overlap="circular"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <ShoppingCartIcon fontSize="large" />
        </Badge>
      </IconButton>
    </div>
  );
};

export default CartHeader;
