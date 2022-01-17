import React from "react";

const ProductItem = ({ bread }) => {
  return (
    <div className="items">
      <h1>{bread.name}</h1>
      <h3>{bread.price}</h3>
      <div className="images">
        <img alt={bread.name} src={bread.image} />
      </div>
    </div>
  );
};

export default ProductItem;
