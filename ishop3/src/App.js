import React from "react";

import "./styles/styles.scss";
import ProductList from "./components/ProductsList";

function App() {
  const productsArray = require('./data/products.json');

  return (
    
    <div className="App">
      <ProductList products={productsArray} shopName="My New Shop" />
    </div>
  );
}

export default App;
