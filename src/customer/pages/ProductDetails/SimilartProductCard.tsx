import React from "react";

const SimilartProductCard = () => {
  return (
    <div>
      <div className="group px-4 relative">
        <div className="card">
          <img
            className="card-media object-top"
            src="https://www.stussy.com/cdn/shop/files/Homepage_2_c6797131-db46-4646-82c2-384c682e74c9.jpg?v=1752776729&width=1920"
          />
        </div>

        <div className="details pt-3 space-y-1 group-hover-effect rounded-md ">
          <div className="name">
            <h1>Burmese Studio</h1>
            <p>Blue Shirt</p>
          </div>

          <div className="price flex items-center gap-3 ">
            <span className="font-semibold text-gray-800 ">40000Ks</span>
            <span className="thin-line-through text-gray-400 ">45000Ks</span>
            <span className="text-primary font-semibold">50%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilartProductCard;
