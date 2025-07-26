import React from "react";

const CategoryGrid = () => {
  return (
    <div className="grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20">
      <div className="col-span-3 row-span-12 text-white ">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://shop.ogs.gg/cdn/shop/files/jerseyaegis.png?v=1706622267&width=2048"
          alt=""
        />
      </div>

      <div className="col-span-2 row-span-6 text-white ">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          //  src="https://nb.scene7.com/is/image/NB/u530esa_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880"
          src="https://mdriveasia.com/cdn/shop/files/AirPods_Pro_2_Sep24_PDP_Image_Position_2__ROSA-EN_600x.jpg?v=1731490479"
          alt=""
        />
      </div>

      <div className="col-span-4 row-span-6 text-white ">
        <img
          className="wd-full h-full object-cover object-top rounded-md"
          src="https://media.sisburma.com/wp-content/uploads/2024/07/25184433/Web-Banner-.jpg"
          //src="https://nb.scene7.com/is/image/NB/u530esa_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880"
          alt=""
        />
      </div>

      <div className="col-span-3 row-span-12 text-white ">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://media.sisburma.com/wp-content/uploads/2025/04/29154404/14-3.jpg"
          alt=""
        />
      </div>

      <div className="col-span-4 row-span-6 text-white ">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          //      src="https://media.sisburma.com/wp-content/uploads/2025/04/29154404/14-3.jpg"
          src="https://origoshoes.com/cdn/shop/files/ORIGO-Menretrosand-1.jpg?v=1708968977&width=900"
          alt=""
        />
      </div>

      <div className="col-span-2 row-span-6  text-white ">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://nikearprod.vtexassets.com/arquivos/ids/1336878-1200-1200?width=1200&height=1200&aspect=true"
          alt=""
        />
      </div>
    </div>
  );
};

export default CategoryGrid;
