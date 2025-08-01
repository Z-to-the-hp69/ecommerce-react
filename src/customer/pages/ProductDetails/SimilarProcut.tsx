import React from "react";
import SimilartProductCard from "./SimilartProductCard";

const SimilarProcut = () => {
  return (
    <div className="grid  lg:grid-cols-6 md:grid-cols-4 sm:grid-col-2 grid-cols-1 justify-between gap-4 gap-y-8">
      {[1, 1, 1, 1, 1, 1].map((item) => (
        <SimilartProductCard />
      ))}
    </div>
  );
};

export default SimilarProcut;
