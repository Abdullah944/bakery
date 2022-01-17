import React from "react";
import products from "../products";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div>
      {products.map((product) => (
        <ProductItem bread={product} />
      ))}
    </div>
  );
};

export default ProductList;
