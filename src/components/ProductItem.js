import React from "react";
import products from "../products";

const ProductItem = ({ bread }) => {
  return (
    <div className="item">
      <h1>{bread.name}</h1>
      <h3>{bread.price}</h3>
      <img alt={bread.name} src={bread.image} />
    </div>
  );
};

export default ProductItem;
