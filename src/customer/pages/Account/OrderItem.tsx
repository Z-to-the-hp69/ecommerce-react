import { ElectricBolt } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { pink } from "@mui/material/colors";
import React from "react";

const OrderItem = () => {
  return (
    <div className="text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer">
      <div className="flex  items-center gap-5">
        <div>
          <Avatar sizes="small" sx={{ bgcolor: pink[400] }}>
            <ElectricBolt />
          </Avatar>
        </div>

        <div>
          <h1 className="font-bold text-gray-500">PENDING</h1>
          <p>Arriving By Tue,18 Aug</p>
        </div>
      </div>

      <div className="p-5  bg-teal-50  flex gap-3">
        <div>
          <img
            className="w-[70px]"
            src="https://parspng.com/wp-content/uploads/2023/06/watchpng.parspng.com-3.png"
            alt=""
          />
        </div>
        <div className="w-full  space-y-2">
          <h1 className="font-bold">Smart Watches</h1>
          <p>
            The Apple Watch features a Retina display, heart rate and blood
            oxygen sensors, GPS, and water resistance. It supports fitness
            tracking, notifications, and runs smoothly with its S-series chip.
          </p>
          <p>
            <strong>size : </strong>
            FREE
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
