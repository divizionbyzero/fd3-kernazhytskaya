import React from "react";
import PropTypes from "prop-types";

import Product from "./Product";

class ProductsList extends React.Component {
  render() {
    const { products, shopName } = this.props;
    return (
      <div>
        <h2>{shopName}</h2>
        <div className="product-list">
          {products.map(item => (
            <Product key={item.id} product={item} />
          ))}
        </div>
      </div>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      count: PropTypes.string.isRequired
    })
  ),
  shopName: PropTypes.string.isRequired
};

export default ProductsList;
