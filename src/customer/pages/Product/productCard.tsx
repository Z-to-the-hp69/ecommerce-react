import React, { useEffect } from "react";
import "./ProductCard.css"; // Assuming you have a CSS file for styles
import { Button } from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";
import { teal } from "@mui/material/colors";
import { Product } from "../../../types/ProductTypes";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }: { item: Product }) => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const navigate = useNavigate();
  console.log("Images:", item.images);

  useEffect(() => {
    let interval: any;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % item.images.length); //item.
        // console.log(item.images);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval); // Clear interval on unmount or when isHovered changes
  }, [isHovered]);
  // console.log("img", item.images);

  return (
    <>
      <div
        onClick={() =>
          navigate(
            `/product-details/${item.category?.categoryId}/${item.title}/${item.id}`
          )
        }
        className="group px-4 relative"
      >
        <div
          className="card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {item.images.map((item, index) => (
            <img
              key={index}
              className="card-media object-top"
              src={item}
              style={{
                transform: `translateX(${(index - currentImage) * 100}%)`,
              }}
            />
          ))}

          {isHovered && (
            <div className="indicator    flex flex-col  items-center space-y-2">
              <div className="flex  gap-3">
                <Button variant="contained" color="secondary">
                  <Favorite sx={{ color: teal[500] }} />
                </Button>

                <Button variant="contained" color="secondary">
                  <ModeComment sx={{ color: teal[500] }} />
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="details pt-3 space-y-1 group-hover-effect rounded-md ">
          <div className="name">
            <h1>{item.seller?.businessDetails.businessName}</h1>
            <p>{item.title}</p>
          </div>

          <div className="price flex items-center gap-3 ">
            <span className="font-semibold text-gray-800 ">
              {item.sellingPrice}Ks
            </span>
            <span className="thin-line-through text-gray-400 ">
              {item.mrpPrice}Ks
            </span>
            <span className="text-primary font-semibold">
              {item.discountPercentage}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
