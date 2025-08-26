// import React from "react";
// import OrderItem from "./OrderItem";

// const Order = () => {
//   return (
//     <div className="text-sm  min-h-screen">
//       <div className="pb-5">
//         <h1 className="font-semibold">All orders</h1>
//         <p>from anytime</p>
//       </div>
//       <div className="space-y-2">
//         {[1, 1, 1, 1, 1, 1].map((item) => (
//           <OrderItem />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Order;
import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { fetchUserOrderHistory } from "../../../State/customer/orderSlice";
import OrderItem from "./OrderItemCard";
import OrderItemCard from "./OrderItemCard";

const Order = () => {
  const dispatch = useAppDispatch();
  const { order } = useAppSelector((store) => store);

  useEffect(() => {
    dispatch(fetchUserOrderHistory(localStorage.getItem("jwt") || ""));
  }, []);
  return (
    <div className="text-sm  min-h-screen">
      <div className="pb-5">
        <h1 className="font-semibold">All orders</h1>
        <p>from anytime</p>
      </div>
      <div className="space-y-2">
        {order.orders.map((order) =>
          order.orderItems.map((item) => (
            <OrderItemCard item={item} order={order} />
          ))
        )}
        {/* <OrderItemCard /> */}
      </div>
    </div>
  );
};

export default Order;
