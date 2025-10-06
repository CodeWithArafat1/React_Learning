import React from "react";
import Nav from "./Nav";

import ProductCard from "./ProductCard";

const ShopingCart = () => {
  return (
    <>
      <div className="">
        <Nav />

        <ProductCard />

        <div className="border-t border-gray-600 mt-10">
          <div className="flex justify-between items-center py-5">
            <h1>Total</h1>
            <span>0.00</span>
          </div>
          <div className=" justify-end flex">
            <button className="btn outline-2 outline-red-500 text-red-500 bg-transparent">
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopingCart;
