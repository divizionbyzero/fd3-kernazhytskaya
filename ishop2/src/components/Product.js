import React from "react";
import PropTypes from "prop-types";

class Product extends React.Component {
  render() {
    const { name, price, count, src } = this.props.product;

    return (
      <div className="product">
        <div className="product-photo-wrap">
          <img className="product-photo" src={src} alt={name} />
        </div>
        <h3 className="product-name">{name}</h3>
        <div className="product-info">
          <span className="product-price">{price}</span>
          <span className="product-count">count: {count}</span>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  })
};

export default Product;
