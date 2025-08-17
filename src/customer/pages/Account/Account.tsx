import { Divider } from "@mui/material";
import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Order from "./Order";
import OrderDetail from "./OrderDetail";
import UserDetail from "./UserDetail";
import Address from "./Address";
import { useAppDispatch } from "../../../State/Store";
import { logout } from "../../../State/AuthSlice";

const menu = [
  { name: "orders", path: "/account/orders" },
  { name: "profile", path: "/account" },
  { name: "Saved Cards", path: "/account/saved-card" },
  { name: "Addresses", path: "/account/addresses" },
  { name: "Logout", path: "/" },
];

const Account = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const handleClick = (item: any) => {
    if (item.path == "/") {
      dispatch(logout(navigate));
    }
    navigate(item.path);
  };

  return (
    <div className="px-5 lg:px-52 min-h-screen mt-10">
      <div>
        <h1 className="text-xl font-bold pb-5">Zwe</h1>
      </div>
      <Divider />

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]">
        <section className="cols-span-1  lg:border-r  lg:pr-5  py-5  h-full ">
          {menu.map((item) => (
            <div
              onClick={() => handleClick(item)}
              key={item.name}
              className={`
                ${
                  item.path == location.pathname ? "bg-gray-700 text-white" : ""
                }
                py-3  cursor-pointer hover:text-white hover:bg-gray-600 px-5 rounded-md border-b`}
            >
              {/* <a href="{item.path}">{item.name}</a> */}
              <p>{item.name}</p>
            </div>
          ))}
        </section>
        <section className="right lg:col-span-2 lg:pl-5  py-5">
          <Routes>
            <Route path="/" element={<UserDetail />} />
            <Route path="/orders" element={<Order />} />
            <Route
              path="/order/:orderId/:orderItemId"
              element={<OrderDetail />}
            />
            <Route path="/addresses" element={<Address />} />
          </Routes>
          {/* <Order /> */}
          {/* <OrderDetail /> */}
          {/* <OrderDetail /> */}
          {/* <UserDetail /> */}
          {/* <Address /> */}
        </section>

        <section className="border p-5"></section>
      </div>
    </div>
  );
};

export default Account;
