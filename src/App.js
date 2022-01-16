import "./App.css";
import products from "./products";

function App() {
  return (
    <div>
      <h1 className="main-h1"> Hello , and welcome to the best bakery!!</h1>
      <h2> EAT one and oyu will eat your hand after it!!</h2>

      <img
        className="bakery-img"
        alt="bakery image"
        src="https://cdn1.vectorstock.com/i/1000x1000/24/85/cartoon-bakery-shop-building-small-business-banner-vector-17482485.jpg"
      />
      <p>{products[0].name}</p>
      <p>{products[0].price}</p>
      <img alt="donat" src={products[0].image} />
      <br />
      <p>{products[1].name}</p>
      <p>{products[1].price}</p>
      <img alt="corwason" src={products[1].image} />
    </div>
  );
}

export default App;
