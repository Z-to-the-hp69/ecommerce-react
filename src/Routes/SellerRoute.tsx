import { Inventory } from "@mui/icons-material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../customer/pages/Product/Product";
import AddProduct from "../seller/pages/Products/AddProduct";
import Order from "../customer/pages/Account/Order";
import Profile from "../seller/pages/Account/Profile";
import Payment from "../seller/pages/Payment/Payment";
import Transaction from "../seller/pages/Payment/Transaction";
import Orders from "../seller/pages/Orders/Orders";
import Products from "../seller/pages/Products/Products";
import Dashboard from "../seller/pages/sellerDashboard/Dashboard";

const SellerRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </div>
  );
};

export default SellerRoute;
