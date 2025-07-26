import React, { useEffect } from "react";
import "./ProductCard.css"; // Assuming you have a CSS file for styles
import { Button } from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";
import { teal } from "@mui/material/colors";

const images = [
  "https://media.sisburma.com/wp-content/uploads/2025/05/31104529/13-1.jpg",
  "https://media.sisburma.com/wp-content/uploads/2025/05/31104515/7-2.jpg",
  "https://media.sisburma.com/wp-content/uploads/2025/06/27145226/19.jpg",
  "https://media.sisburma.com/wp-content/uploads/2025/06/27145526/13.jpg",
  "https://media.sisburma.com/wp-content/uploads/2025/06/27145514/1-1.jpg",
];

const ProductCard = () => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  useEffect(() => {
    let interval: any;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval); // Clear interval on unmount or when isHovered changes
  }, [isHovered]);

  return (
    <>
      <div className="group px-4 relative">
        <div
          className="card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {images.map((image, index) => (
            <img
              className="card-media object-top"
              src={image}
              style={{
                transform: `translateX(${(index - currentImage) * 100}%)`,
              }}
            />
          ))}

          {
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
          }
        </div>
      </div>
    </>
  );
};

export default ProductCard;
