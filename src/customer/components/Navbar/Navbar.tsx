import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  AddShoppingCart,
  CategorySharp,
  FavoriteBorder,
  Storefront,
} from "@mui/icons-material";
import CategorySheet from "./CategorySheet";
import { mainCategory } from "../../../data/mainCategory";

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  //large screen -true
  const [selectedCategory, setSelectedCategory] = React.useState("gents");
  const [showCategorySheet, setShowCategorySheet] = React.useState(false);

  return (
    <div className="pt-[70px]">
      <Box
        className="bg-white shadow-md fixed top-0 left-0 right-0"
        sx={{ zIndex: 2 }}
      >
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
          <div className="flex  items-center gap-9">
            <div className="flex  items-center gap-2">
              {!isLarge && (
                <IconButton>
                  <MenuIcon />
                </IconButton>
              )}
              <h1 className="logo cursor-pointer text-lg md:text-2xl text-[#000000]">
                Taurus Fifteen
              </h1>
            </div>

            <ul className="flex items-center font-medium text-gray-800">
              {mainCategory.map((item) => (
                <li
                  onMouseLeave={() => {
                    setShowCategorySheet(false);
                  }}
                  onMouseEnter={() => {
                    setShowCategorySheet(true);
                    setSelectedCategory(item.categoryId);
                  }}
                  className="mainCategory hover:text-[#8e44ad] hover:border-b-2 h-[70px] px-4 border-[#8e44ad] flex items-center"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-1 lg:gap-6 items-center">
            <IconButton>
              <SearchIcon />
            </IconButton>

            {false ? (
              <Button className="flex items-center gap-2">
                <Avatar
                  sx={{ width: 29, height: 29 }}
                  src="https://i.pinimg.com/736x/9d/41/32/9d41323ed75a9c7a74bedb7202f07d93.jpg"
                />
                <h1 className="font-semibold hidden lg:block">Zwe</h1>
              </Button>
            ) : (
              <Button variant="contained">Login</Button>
            )}
            <IconButton>
              <FavoriteBorder sx={{ fontSize: 29 }} />
            </IconButton>

            <IconButton>
              <AddShoppingCart
                className="text-gray-700"
                sx={{ fontSize: 29 }}
              />
            </IconButton>
            {isLarge && (
              <Button startIcon={<Storefront />} variant="outlined">
                Become Seller
              </Button>
            )}
          </div>
        </div>

        {showCategorySheet && (
          <div
            onMouseLeave={() => setShowCategorySheet(false)}
            onMouseEnter={() => setShowCategorySheet(true)}
            className="categorySheet absolute  top-[4.41rem] left-20 right-20 border"
          >
            <CategorySheet selectedCategory={selectedCategory} />
          </div>
        )}
      </Box>
    </div>
  );
};

export default Navbar;
