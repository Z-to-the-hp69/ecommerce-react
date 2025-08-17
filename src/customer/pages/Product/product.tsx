// import React, { useEffect, useState } from "react";
// import FilterSection from "./FilterSection";
// import ProductCard from "./ProductCard";
// import {
//   Box,
//   Divider,
//   FormControl,
//   IconButton,
//   InputLabel,
//   MenuItem,
//   Pagination,
//   Select,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import { FilterAlt } from "@mui/icons-material";
// import { useAppDispatch, useAppSelector } from "../../../State/Store";
// import { useParams, useSearchParams } from "react-router-dom";
// import { fetchAllProducts } from "../../../State/customer/ProductSlice";
// import { fetchProduct } from "../../../State/fetchProduct";

// const Product = () => {
//   const theme = useTheme();
//   const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

//   const [page, setPage] = useState(1);
//   const [sort, setSort] = React.useState("");
//   const dispatch = useAppDispatch();
//   const [searchParam, setSearchParams] = useSearchParams();
//   const [minPrice, setMinPrice] = useState(0);
//   const { category } = useParams();
//   const { product } = useAppSelector((store) => store);
//   // console.log("Product state:", product);
//   // console.log("Product products:", product.products);

//   //const { products } = useAppSelector((store) => store.product);

//   const handleSortChange = (event: any) => {
//     setSort(event.target.value);
//   };

//   const handlePageChange = (value: number) => {
//     setPage(value);
//   };

//   // useEffect(() => {
//   //   const [minPrice, maxPrice] = searchParam.get("price")?.split(",") || [];
//   //   const color = searchParam.get("color");
//   //   const minDiscount = searchParam.get("discount")
//   //     ? Number(searchParam.get("discount"))
//   //     : undefined;
//   //   const pageNumber = page - 1;

//   //   // Build filter only with valid values
//   //   const newFilter: any = {};
//   //   if (color) newFilter.color = color;
//   //   if (minPrice) newFilter.minPrice = Number(minPrice);
//   //   if (maxPrice) newFilter.maxPrice = Number(maxPrice);
//   //   if (minDiscount) newFilter.minDiscount = minDiscount;

//   //   dispatch(fetchAllProducts({ newFilter, pageNumber }));
//   // }, [category, searchParam, page]);
//   useEffect(() => {
//     const color = searchParam.get("color");
//     const [minPrice, maxPrice] = searchParam.get("price")?.split("-") || [];

//     const minDiscount = searchParam.get("discount")
//       ? Number(searchParam.get("discount"))
//       : undefined;
//     const pageNumber = page - 1;

//     const newFilter = {
//       color: color || "",
//       minPrice: minPrice ? Number(minPrice) : undefined,
//       maxPrice: maxPrice ? Number(maxPrice) : undefined,
//       minDiscount,
//       pageNumber,
//     };
//     dispatch(fetchAllProducts(newFilter));
//   }, [category, searchParam]);

//   return (
//     <div className="z-10 mt-10">
//       <div>
//         <h1 className="text-3xl text-center font-bold  text-gray-700 pb-5 px-9  uppercase space-x-2">
//           Men T-shirts
//         </h1>
//       </div>

//       <div className="lg:flex">
//         <section className="filter_section hidden lg:block w-[20%]">
//           <FilterSection />
//         </section>
//         <div className="w-full lg:w-[80%] space-y-5">
//           <div className="flex  justify-between items-center px-9 h-[40px]">
//             <div className="relative w-[50%]">
//               {!isLarge && (
//                 <IconButton>
//                   <FilterAlt />
//                 </IconButton>
//               )}

//               {!isLarge && (
//                 <Box>
//                   <FilterSection />
//                 </Box>
//               )}
//             </div>
//             <Box sx={{ minWidth: 120 }}>
//               <FormControl size="small" sx={{ width: "200px" }}>
//                 <InputLabel id="demo-simple-select-label">Sort</InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={sort}
//                   label="Sort"
//                   onChange={handleSortChange}
//                 >
//                   <MenuItem value={"price_low"}>Price : Low - High</MenuItem>
//                   <MenuItem value={"price_high"}>Price : High - Low</MenuItem>
//                   <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//           </div>
//           <Divider />
//           <section className="products_section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center">
//             {product.products.map((item) => (
//               <ProductCard item={item} />
//             ))}
//           </section>
//           <div className="flex justify-center py-10 ">
//             <Pagination
//               shape="rounded"
//               color="secondary"
//               onChange={(e, value) => handlePageChange(value)}
//               count={10}
//               variant="outlined"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;

import React, { useEffect, useState } from "react";
import FilterSection from "./FilterSection";
import ProductCard from "./ProductCard";
import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FilterAlt } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchAllProducts } from "../../../State/customer/ProductSlice";

const Product = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const dispatch = useAppDispatch();
  const { category } = useParams();
  const { product } = useAppSelector((store) => store);

  const [searchParam, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  const handleSortChange = (event: any) => setSort(event.target.value);
  const handlePageChange = (event: any, value: number) => setPage(value);

  useEffect(() => {
    const color = searchParam.get("color");
    const [minPrice, maxPrice] = searchParam.get("price")?.split("-") || [];
    const minDiscount = searchParam.get("discount")
      ? Number(searchParam.get("discount"))
      : undefined;

    const filter: any = {};
    if (color) filter.color = color;
    if (minPrice) filter.minPrice = Number(minPrice);
    if (maxPrice) filter.maxPrice = Number(maxPrice);
    if (minDiscount) filter.minDiscount = minDiscount;
    filter.pageNumber = page - 1;
    if (sort) filter.sort = sort;

    dispatch(fetchAllProducts(filter));
  }, [category, searchParam, page, sort]);

  return (
    <div className="z-10 mt-10">
      <h1 className="text-3xl text-center font-bold text-gray-700 pb-5 px-9 uppercase">
        Men T-shirts
      </h1>

      <div className="lg:flex">
        <section className="filter_section hidden lg:block w-[20%]">
          <FilterSection />
        </section>

        <div className="w-full lg:w-[80%] space-y-5">
          <div className="flex justify-between items-center px-9 h-[40px]">
            {!isLarge && (
              <IconButton>
                <FilterAlt />
              </IconButton>
            )}

            {!isLarge && (
              <Box>
                <FilterSection />
              </Box>
            )}

            <Box sx={{ minWidth: 120 }}>
              <FormControl size="small" sx={{ width: "200px" }}>
                <InputLabel id="sort-label">Sort</InputLabel>
                <Select
                  labelId="sort-label"
                  id="sort-select"
                  value={sort}
                  label="Sort"
                  onChange={handleSortChange}
                >
                  <MenuItem value={"price_low"}>Price: Low - High</MenuItem>
                  <MenuItem value={"price_high"}>Price: High - Low</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <Divider />

          <section className="products_section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5">
            {product.products.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </section>

          <div className="flex justify-center py-10">
            <Pagination
              shape="rounded"
              color="secondary"
              count={10}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
