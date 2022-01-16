import React from "react";
import products from "../products";

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
      <div className="donat-image">
        <h1>{products[0].name}</h1>
        <h1>{products[0].price}</h1>
        <img alt="donat" src={products[0].image} />
      </div>
      <div className="cake-image">
        <h1>{products[1].name}</h1>
        <h1>{products[1].price}</h1>
        {/* <h2>{products.map((name) => name.name)}</h2> */}
        <img alt="cake" src={products[1].image} />
      </div>
    </div>
  );
};

export default Home;
