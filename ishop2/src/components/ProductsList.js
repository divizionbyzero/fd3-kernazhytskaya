import React from "react";
import PropTypes from "prop-types";

import Product from "./Product";

class ProductsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        selectedId: '',
        products: this.props.products
    };
  }

  toggleSelected = (id) => {
    this.setState({selectedId: id});
  }

  delHandler = (id) => {
    if (window.confirm('Are you sure you wish to delete this item?'))
    this.setState({products: this.state.products.filter(product => product.id !== id)});
  }


  render() {
    const { shopName } = this.props;
    const { products } = this.state;
    return (
      <div>
        <h2>{shopName}</h2>
        <div className="product-list">
          {products.map(item => (
            <Product key={item.id}
                      product={item}
                      clickHandler={this.toggleSelected}
                      delHandler={this.delHandler}
                      selectedId={this.state.selectedId} />
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
