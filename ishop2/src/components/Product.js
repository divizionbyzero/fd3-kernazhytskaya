import React from "react";
import PropTypes from "prop-types";

class Product extends React.Component {

  render() {
    const { name, price, count, src, id } = this.props.product;
    const { clickHandler, delHandler, selectedId } = this.props;

    return (
      <div onClick={() => clickHandler(id)} className={selectedId === id ? "product product-selected" : "product"}>
        <div className="product-photo-wrap">
          <img className="product-photo" src={src} alt={name} />
        </div>
        <div className="product-top">
          <h3 className="product-name">{name}</h3>
          <button onClick={() => delHandler(id)}>Del</button>
        </div>
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
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    count: PropTypes.string.isRequired
  }),
  clickHandler: PropTypes.func.isRequired,
  delHandler: PropTypes.func.isRequired,
  selectedId: PropTypes.string.isRequired
}

export default Product;
