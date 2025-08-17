// import {
//   Button,
//   Divider,
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   Radio,
//   RadioGroup,
// } from "@mui/material";
// import React, { useState } from "react";
// import { colors } from "../../../data/filter/color";
// import { useSearchParams } from "react-router-dom";
// import { price } from "../../../data/filter/price";
// import { discount } from "../../../data/filter/discount";

// const FilterSection = () => {
//   const [expendColor, setExpendColor] = useState(false);
//   const [searchParams, setSearchParams] = useSearchParams();

//   const handleColorToggle = () => {
//     setExpendColor(!expendColor);
//   };

//   const updateFilterParams = (e: any) => {
//     const { value, name } = e.target;
//     if (value) {
//       searchParams.set(name, value);
//     } else {
//       searchParams.delete(name);
//     }
//     setSearchParams(searchParams);
//   };
//   // const updateFilterParams = (e: any) => {
//   //   const { name, value } = e.target;
//   //   const newParams = new URLSearchParams(searchParams.toString());

//   //   if (value) newParams.set(name, value);
//   //   else newParams.delete(name);

//   //   setSearchParams(newParams);
//   // };

//   const clearAllFilter = () => {
//     console.log("clear all filter", searchParams);
//     searchParams.forEach((value: any, key: any) => {
//       searchParams.delete(key);
//     });
//     setSearchParams(searchParams);
//   };

//   return (
//     <div className="z-50  space-y-5 bg-white">
//       <div className="flex items-center justify-between h-[40px] px-9 lg:border-r">
//         <p className="text-lg font-semibold">Filters</p>
//         <Button
//           size="small"
//           className="text-pink-600 cursor-pointer font-semibold"
//           onClick={clearAllFilter}
//         >
//           clear all
//         </Button>
//       </div>
//       <Divider />
//       <div className="px-9 space-y-6">
//         <section>
//           <FormControl>
//             <FormLabel
//               sx={{
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 color: "pink",
//                 pb: "14px",
//               }}
//               className="text-2xl font-semibold "
//               id="color"
//             >
//               Color
//             </FormLabel>
//             <RadioGroup
//               aria-labelledby="color"
//               defaultValue=""
//               name="color"
//               onChange={updateFilterParams}
//             >
//               {colors.slice(0, expendColor ? colors.length : 5).map((item) => (
//                 <FormControlLabel
//                   key={item.hex}
//                   value={item.hex}
//                   control={<Radio />}
//                   label={
//                     <div className="flex items-center gap-3">
//                       <p>{item.name}</p>
//                       <p
//                         style={{ backgroundColor: item.hex }}
//                         className={`h-5  w-5 rounded-full  ${
//                           item.name == "white" ? "border" : ""
//                         } `}
//                       ></p>
//                     </div>
//                   }
//                 />
//               ))}
//             </RadioGroup>
//           </FormControl>

//           <div>
//             <Button
//               onClick={handleColorToggle}
//               className="text-pink-500 cursor-pointer hover:text-pink-400 flex items-center"
//             >
//               {expendColor ? "hide" : `+${colors.length - 5} more`}
//             </Button>
//           </div>
//         </section>

//         <section>
//           <FormControl>
//             <FormLabel
//               sx={{
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 pb: "14px",
//                 color: "pink",
//               }}
//               className=" text-2xl font-semibold"
//               id="price"
//             >
//               Price
//             </FormLabel>

//             <RadioGroup
//               name="price"
//               onChange={updateFilterParams}
//               aria-labelledby="price"
//               defaultValue=""
//             >
//               {price.map((item, index) => (
//                 <FormControlLabel
//                   key={item.name}
//                   value={item.value}
//                   control={<Radio size="small" />}
//                   label={item.name}
//                 />
//               ))}
//             </RadioGroup>
//           </FormControl>
//         </section>
//         <Divider />

//         <section>
//           <FormControl>
//             <FormLabel
//               sx={{
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 pb: "14px",
//                 color: "pink",
//               }}
//               className="text-2xl font-semibold"
//               id="brand"
//             >
//               Discount
//             </FormLabel>
//             <RadioGroup
//               name="discount"
//               onChange={updateFilterParams}
//               aria-labelledby="brand"
//               defaultValue=""
//             >
//               {discount.map((item, index) => (
//                 <FormControlLabel
//                   key={item.name}
//                   value={item.value}
//                   control={<Radio size="small" />}
//                   label={item.name}
//                 />
//               ))}
//             </RadioGroup>
//           </FormControl>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default FilterSection;

import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { colors } from "../../../data/filter/color";
import { useSearchParams } from "react-router-dom";
import { price } from "../../../data/filter/price";
import { discount } from "../../../data/filter/discount";

const FilterSection = () => {
  const [expendColor, setExpendColor] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleColorToggle = () => {
    setExpendColor(!expendColor);
  };

  const updateFilterParams = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newParams = new URLSearchParams(searchParams.toString());

    if (value) newParams.set(name, value.toLowerCase());
    else newParams.delete(name);

    // Reset page when filter changes
    newParams.delete("page");

    setSearchParams(newParams);
  };

  const clearAllFilter = () => {
    const newParams = new URLSearchParams();
    setSearchParams(newParams);
  };

  return (
    <div className="z-50 space-y-5 bg-white">
      <div className="flex items-center justify-between h-[40px] px-9 lg:border-r">
        <p className="text-lg font-semibold">Filters</p>
        <Button
          size="small"
          className="text-pink-600 cursor-pointer font-semibold"
          onClick={clearAllFilter}
        >
          clear all
        </Button>
      </div>
      <Divider />
      <div className="px-9 space-y-6">
        {/* Color Filter */}
        {/* Color Filter */}
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "pink",
                pb: "14px",
              }}
              id="color"
            >
              Color
            </FormLabel>
            <RadioGroup
              aria-labelledby="color"
              name="color"
              value={searchParams.get("color") || ""}
              onChange={updateFilterParams}
            >
              {colors.slice(0, expendColor ? colors.length : 5).map((item) => (
                <FormControlLabel
                  key={item.name}
                  value={item.name.toLowerCase()}
                  control={<Radio />}
                  label={
                    <div className="flex items-center gap-3">
                      <p>{item.name}</p>
                      <p
                        style={{ backgroundColor: item.hex }}
                        className={`h-5 w-5 rounded-full ${
                          item.name.toLowerCase() === "white" ? "border" : ""
                        }`}
                      ></p>
                    </div>
                  }
                />
              ))}
            </RadioGroup>

            {/* Move the button under the RadioGroup */}
            {colors.length > 5 && (
              <Button
                onClick={handleColorToggle}
                className="text-pink-500 cursor-pointer hover:text-pink-400 flex items-center mt-2"
              >
                {expendColor ? "hide" : `+${colors.length - 5} more`}
              </Button>
            )}
          </FormControl>
        </section>

        {/* Price Filter */}
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "pink",
                pb: "14px",
              }}
              id="price"
            >
              Price
            </FormLabel>
            <RadioGroup
              name="price"
              value={searchParams.get("price") || ""}
              onChange={updateFilterParams}
              aria-labelledby="price"
            >
              {price.map((item) => (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={<Radio size="small" />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>

        <Divider />

        {/* Discount Filter */}
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "pink",
                pb: "14px",
              }}
              id="discount"
            >
              Discount
            </FormLabel>
            <RadioGroup
              name="discount"
              value={searchParams.get("discount") || ""}
              onChange={updateFilterParams}
              aria-labelledby="discount"
            >
              {discount.map((item) => (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={<Radio size="small" />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>
      </div>
    </div>
  );
};

export default FilterSection;
