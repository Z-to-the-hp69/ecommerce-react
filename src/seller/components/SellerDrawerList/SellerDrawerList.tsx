// import React from "react";
// import {
//   AccountBalanceWallet,
//   AccountBox,
//   Add,
//   Dashboard,
//   Inventory,
//   LogoDev,
//   Logout,
//   Receipt,
//   ShoppingBag,
// } from "@mui/icons-material";
// import path from "path";
// import DrawerList from "../../../component/DrawerList";

// const menu = [
//   {
//     name: "Dashboard",
//     path: "/seller",
//     icon: <Dashboard className="text-gray-600" />,
//     activeIcon: <Dashboard className="text-white" />,
//   },
//   {
//     name: "Orders",
//     path: "/seller/orders",
//     icon: <ShoppingBag className="text-gray-600" />,
//     activeIcon: <ShoppingBag className="text-white" />,
//   },
//   {
//     name: "Products",
//     path: "/seller/products",
//     icon: <Inventory className="text-gray-600" />,
//     activeIcon: <Inventory className="text-white" />,
//   },
//   {
//     name: "Add Product",
//     path: "/seller/add-product",
//     icon: <Add className="text-gray-600" />,
//     activeIcon: <Add className="text-white" />,
//   },
//   {
//     name: "Payment",
//     path: "/seller/payment",
//     icon: <AccountBalanceWallet className="text-gray-600" />,
//     activeIcon: <AccountBalanceWallet className="text-white" />,
//   },
//   {
//     name: "Transaction",
//     path: "/seller/transaction",
//     icon: <Receipt className="text-gray-600" />,
//     activeIcon: <Receipt className="text-white" />,
//   },
// ];

// const menu2 = [
//   {
//     name: "Account",
//     path: "/seller/account",
//     icon: <AccountBox className="text-gray-600" />,
//     activeIcon: <AccountBox className="text-white" />,
//   },
//   {
//     name: "Logout",
//     path: "/",
//     icon: <Logout className="text-gray-600" />,
//     activeIcon: <Logout className="text-white" />,
//   },
// ];

// const SellerDrawerList = ({ toggleDrawer }: { toggleDrawer: any }) => {
//   return <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer} />;
// };

// export default SellerDrawerList;
import React from "react";
import {
  AccountBalanceWallet,
  AccountBox,
  Add,
  Dashboard,
  Inventory,
  Logout,
  Receipt,
  ShoppingBag,
} from "@mui/icons-material";
import DrawerList from "../../../component/DrawerList";

const menu = [
  {
    name: "Dashboard",
    path: "/seller",
    icon: <Dashboard className="text-gray-600" />,
    activeIcon: <Dashboard className="text-white" />,
  },
  {
    name: "Orders",
    path: "/seller/orders",
    icon: <ShoppingBag className="text-gray-600" />,
    activeIcon: <ShoppingBag className="text-white" />,
  },
  {
    name: "Products",
    path: "/seller/products",
    icon: <Inventory className="text-gray-600" />,
    activeIcon: <Inventory className="text-white" />,
  },
  {
    name: "Add Product",
    path: "/seller/add-product",
    icon: <Add className="text-gray-600" />,
    activeIcon: <Add className="text-white" />,
  },
  {
    name: "Payment",
    path: "/seller/payment",
    icon: <AccountBalanceWallet className="text-gray-600" />,
    activeIcon: <AccountBalanceWallet className="text-white" />,
  },
  {
    name: "Transaction",
    path: "/seller/transaction",
    icon: <Receipt className="text-gray-600" />,
    activeIcon: <Receipt className="text-white" />,
  },
];

const menu2 = [
  {
    name: "Account",
    path: "/seller/account",
    icon: <AccountBox className="text-gray-600" />,
    activeIcon: <AccountBox className="text-white" />,
  },
  {
    name: "Logout",
    path: "/",
    icon: <Logout className="text-gray-600" />,
    activeIcon: <Logout className="text-white" />,
  },
];

interface SellerDrawerListProps {
  toggleDrawer: () => void;
}

const SellerDrawerList = ({ toggleDrawer }: SellerDrawerListProps) => {
  return <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer} />;
};

export default SellerDrawerList;
