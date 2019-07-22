import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";

class Product extends React.Component {

  render() {
    const { name, price, count, src, id } = this.props.product;
    const { delHandler, selectedId, clickHandler, isEdit, isChanged } = this.props;

    return (
      <div className={selectedId === id ? "product product-selected" : isEdit && isChanged ? "product semitransparent" : "product"}>
        <div onClick={() => clickHandler(id, false)} className="product-photo-wrap">
          <img className={!isEdit ? "product-photo cursor-pointer" : "product-photo"} src={src} alt={name} />
        </div>
        <div className="product-top">
          <h3 className="product-name">{name}</h3>
          <div className="product-controls">
            <Button disabled={(isChanged && selectedId !== id) || isEdit} clickHandler={() => delHandler(id)}>Del</Button>
            <Button disabled={isChanged && selectedId !== id} clickHandler={() => clickHandler(id, true)} primary>Edit</Button>
          </div>
        </div>
        <div className="product-info">
          <span className="product-price"><span className="product-label">price:</span> {price}$</span>
          <span className="product-count"><span className="product-label">count:</span> {count}</span>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    src: PropTypes.string,
    count: PropTypes.number
  }),
  clickHandler: PropTypes.func,
  delHandler: PropTypes.func,
  selectedId: PropTypes.number,
  isEdit: PropTypes.bool,
  isChanged: PropTypes.bool
}

export default Product;
