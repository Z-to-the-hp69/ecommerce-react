import { Box, Button, Divider } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import OrderStepper from "./OrderStepper";
import { Payments } from "@mui/icons-material";

const OrderDetail = () => {
  const navigate = useNavigate();
  return (
    <Box className="space-y-5">
      <section className="flex flex-col gap-5  justify-center items-center">
        <img
          className="w-[100px]"
          src={
            "https://parspng.com/wp-content/uploads/2023/06/watchpng.parspng.com-3.png"
          }
          alt=""
        />
        <div className="text-sm space-y-1 text-center">
          <h1 className="font-bold">{"Smart watches"}</h1>
          <p>
            {
              "The Apple Watch features a Retina display, heart rate and blood oxygen sensors, GPS, and water resistance. It supports fitness tracking, notifications, and runs smoothly with its S-series chip"
            }
          </p>
          <p>
            <strong>Size : </strong>M
          </p>
        </div>

        <div>
          <Button onClick={() => navigate(`/reviews/${5}/create`)}>
            Write Review
          </Button>
        </div>
      </section>

      <section className="border p-5">
        <OrderStepper orderStatus={"SHIPPED"} />
      </section>

      <div className="border p-5">
        <h1 className="font-semibold pb-3">Delivery Address</h1>
        <div className="text-sm space-y-2">
          <div className="flex gap-5 font-medium">
            <p>{"Zwe"}</p>
            <Divider flexItem orientation="vertical" />
            <p>{950577917}</p>
          </div>
          <p>Rm-2, Bogyoke Rd, Near Than Bridge Gyi</p>
        </div>
      </div>

      <div className="border space-y-4">
        <div className="flex justify-between text-sm pt-5  px-5">
          <div className="space-y-1">
            <p className="font-bold">Total Item Price</p>
            <p>
              You saved{" "}
              <span className="text-green-500  font-medium text-xs">
                {25000}.00
              </span>
              on this item
            </p>
          </div>
          <p className="font-medium">{250000}Ks</p>
        </div>
        <div className="px-5">
          <div className="bg-teal-50 px-5  py-2  text-xs font-medium flex items-center gap-3">
            <Payments />
            <p>Pay on Delivery</p>
          </div>
        </div>
        <Divider />
        <div className="px-5 pb-5">
          <p className="text-xs">
            <strong>Sold by : </strong>
            {"Men Clothing"}
          </p>
        </div>

        <div className="p-10">
          <Button
            disabled={true}
            color="error"
            sx={{ py: "0.7rem" }}
            className=""
            variant="outlined"
            fullWidth
          >
            {true ? "order cancelled" : "Cancel Order"}
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default OrderDetail;
