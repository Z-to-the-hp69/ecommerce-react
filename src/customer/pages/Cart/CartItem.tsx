import { Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

const CartItem = () => {
  const handleUpdateQuantity = () => {
    //handle
  };
  return (
    <div className="border rounded-md  relative">
      <div className="p-5 flex gap-3">
        <div>
          <img
            className="w-[90px] rounded-md"
            src="https://i.pinimg.com/736x/82/f7/71/82f771e196ca70d2d6b814613b5632ec.jpg    "
            alt=""
          />
        </div>

        <div className="space-y-2">
          <h1 className="font-semibold text-lg">Burmese Dress</h1>
          <p className="text-gray-600 font-medium text-sm">
            Myanmar traditional dress Myanmar dress Myanmar sarong Myanmar
            clothing Made to order
          </p>
          <p className="text-gray-400 text-xs">
            <strong>Sold by:</strong>
            Natural Lifestyle product
          </p>
          <p className="text-sm">7 days replacement available</p>
          <p className="text-sm text-gray-500">
            <strong>quantity : </strong>6
          </p>
        </div>
      </div>
      <Divider />

      <div className="flex justify-between items-center">
        <div className="px-5 py-2 flex justify-between items-center">
          <div className="flex  items-center gap-2 w-[140px] justify-between">
            <Button onClick={handleUpdateQuantity} disabled={true}>
              <Remove />
            </Button>
            <span>{5}</span>
            <Button onClick={handleUpdateQuantity}>
              <AddIcon />
            </Button>
          </div>
        </div>

        <div className="pr-5">
          <p className="text-gray-700 font-medium">550000Ks</p>
        </div>
      </div>

      <div className="absolute top-1 right-1">
        <IconButton color="primary">
          <Close />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
