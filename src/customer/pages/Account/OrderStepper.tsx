import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const steps = [
  { name: "Order Placed", description: "on Mon,11 Jul", value: "PLACED" },
  {
    name: "Packed",
    description: "Item Packed in Dispatch Warehouse",
    value: "CONFIRM",
  },
  {
    name: "Shipped",
    description: "by Mon 11 Jul",
    value: "SHIPPED",
  },
  { name: "Arriving", description: "by 16 Jul - 18 Jul", value: "ARRIVING" },
  { name: "Arrived", description: "by 16 Jul - 18 Jul", value: "DELIVERED" },
];

const cancelStep = [
  {
    name: "Order Placed",
    description: "on Thu, 11 Jul",
    value: "PLACED",
  },
  {
    name: "Order Cancelled",
    description: "on Thu, 11 Jul",
    value: "CANCELLED",
  },
];

const currentStep = 1;

const OrderStepper = ({ orderStatus }: any) => {
  const [statusStep, setStatusStep] = useState(steps);

  useEffect(() => {
    if (orderStatus === "CANCELLED") {
      setStatusStep(cancelStep);
    } else {
      setStatusStep(steps);
    }
  }, [orderStatus]);

  return (
    <Box className="my-10">
      {statusStep.map((step, index) => (
        <div key={index} className="flex px-4">
          <div className="flex flex-col items-center">
            <Box
              sx={{ zIndex: -1 }}
              className={`w-8 h-8 rounded-full flex items-center justify-center z-10
                ${
                  index <= currentStep
                    ? "bg-gray-200 text-pink-300"
                    : "bg-gray-300 text-blue-700"
                }`}
            >
              {step.value === orderStatus ? (
                <CheckCircleIcon />
              ) : (
                <FiberManualRecordIcon sx={{ zIndex: -1 }} />
              )}
            </Box>

            {statusStep.length - 1 != index && (
              <div
                className={`border h-20 w-[2px] ${
                  index < currentStep ? "bg-pink-600" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>

          <div className="ml-2 w-full">
            <div
              className={`${
                step.value === orderStatus
                  ? "bg-gray-500 p-2 text-white font-medium rounded-md translate-y-3"
                  : ""
              } ${
                orderStatus === "CANCELLED" && step.value === orderStatus
                  ? "bg-red-500"
                  : ""
              } w-full`}
            >
              <p>{step.name}</p>
              <p
                className={`${
                  step.value === orderStatus ? "text-gray-200" : "text-gray-500"
                } text-xs`}
              >
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Box>
  );
};

export default OrderStepper;
