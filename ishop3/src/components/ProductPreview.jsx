import React from "react";
import PropTypes from "prop-types";


class ProductPreview extends React.Component {

    render() {
      const { name, price, count, src } = this.props.product;
      return (
        <React.Fragment>
          <h3 className="preview-title">View Product</h3>
          <div className="preview">
            <div className="preview-photo-wrap">
              <img className="preview-photo" src={src} alt={name} />
            </div>
            <div className="preview-content">
              <div className="preview-top">
                <h3 className="preview-name">{name}</h3>
              </div>
              <div className="preview-info">
                <span className="preview-price"><span className="product-label">price:</span> {price}$</span>
                <span className="preview-count"><span className="product-label">count:</span> {count}</span>
              </div>
            </div>
          </div>  
        </React.Fragment>
      );
    }
  }
  
  ProductPreview.propTypes = {
    editViewModeSwitcher: PropTypes.func,
    delHandler: PropTypes.func,
    product: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
      src: PropTypes.string,
      count: PropTypes.number
    })
  }
  
  export default ProductPreview;
  