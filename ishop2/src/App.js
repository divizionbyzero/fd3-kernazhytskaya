import React from "react";

import "./styles/styles.scss";
import ProductList from "./components/ProductsList";

function App() {
  const productsArray = [
    {
      id: "013",
      name: "Product1",
      price: "200$",
      src: "https://placeimg.com/640/480/animals",
      count: "5"
    },
    {
      id: "345",
      name: "Product2",
      price: "100$",
      src: "https://placeimg.com/640/480/tech",
      count: "2"
    },
    {
      id: "678",
      name: "Product3",
      price: "300$",
      src: "https://placeimg.com/640/480/nature",
      count: "3"
    },
    {
      id: "901",
      name: "Product4",
      price: "500$",
      src: "https://placeimg.com/640/480/arch",
      count: "56"
    }
  ];

  return (
    <div className="App">
      <ProductList products={productsArray} shopName="My New Shop" />
    </div>
  );
}

export default App;
