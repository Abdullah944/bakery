import React from "react";
import products from "../products";
import ProductList from "./ProductList";
import ProductItem from "./ProductItem";

const Home = () => {
  return (
    <div>
      <div className="welcome-text-img">
        <h1> Hello , and welcome to the best bakery!!</h1>
        <h2> EAT one and you will eat your hand after it!!</h2>
        <img
          alt="bakery image"
          src="https://icon2.cleanpng.com/20180219/aye/kisspng-bakery-logo-pastry-cookie-hand-drawn-vector-chef-hat-with-ribbon-5a8b6d87b4b962.0770878815190869837403.jpg"
        />
      </div>
      {/* product list inside product item */}
      <ProductList />
    </div>
  );
};

export default Home;

// {products.map(product)}
