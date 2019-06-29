import React from "react";
import PropTypes from "prop-types";

import Product from "./Product";
import ProductPreview from "./ProductPreview";
import ProductEdit from "./ProductEdit";

class ProductsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        selectedId: undefined,
        isEdit: false,
        isChanged: false,
        isNew: false,
        products: this.props.products
    };
  }

  toggleSelected = (id, isEdit=false) => {
    if (this.state.isChanged) return;
    if (this.state.products.find(product => product.id === id)) {
      this.setState({selectedId: id, isEdit: isEdit});
  }
  }

  changeHandler = () => {
    this.setState({isChanged: true});
  }

  editViewModeSwitcher = () => {    
    this.setState({isEdit: !this.state.isEdit, isChanged: false, isNew: false});
  }

  delHandler = (id) => {
    if (this.state.isEdit) return;
    if (window.confirm('Are you sure you wish to delete this item?')) {
      this.setState({products: this.state.products.filter(product => product.id !== id), selectedId: undefined});
    }
  }

  addNew = () => {
    this.setState({isEdit: true, selectedId: undefined, isChanged: false, isNew: true, product: {id: undefined, name: undefined, count: undefined, src: undefined}});
  }

  saveEdited = (obj) => {
    let indexOfEditedObject = this.state.products.findIndex(product => product.id === obj.id);
    if (indexOfEditedObject > -1) {
      const arrayCopy = this.state.products.slice();
      arrayCopy[indexOfEditedObject] = obj;
      this.setState({products: arrayCopy, isChanged: false});
    }
    else {
      this.setState({products: [...this.state.products, obj], isChanged: false});
    }
    this.editViewModeSwitcher();
  }

  render() {
    const { shopName } = this.props;
    const { products, isChanged } = this.state;
    return (
      <div>
        <div className="header">
          <h2 className="header-title">{shopName}</h2>
          <button className="header-button" disabled={isChanged} onClick={this.addNew}>+ Add new</button>
        </div>
        <div className="product-list">
          {products.map(item => (
            <Product key={item.id}
                      product={item}
                      clickHandler={this.toggleSelected}
                      delHandler={this.delHandler}
                      selectedId={this.state.selectedId}
                      isEdit={this.state.isEdit}
                      isChanged={this.state.isChanged}/>
          ))}
        </div>
        {(!!this.state.selectedId && !this.state.isEdit) &&
          <ProductPreview
            editViewModeSwitcher={this.editViewModeSwitcher}
            delHandler={this.delHandler}
            product={this.state.products.find(product => product.id === this.state.selectedId)} />
          }
        {this.state.isEdit &&
          <ProductEdit
            save={this.saveEdited}
            // editViewModeSwitcher={this.editViewModeSwitcher}
            changedHandler={this.changeHandler}
            isChanged={this.state.isChanged}
            isNew={this.state.isNew}
            product={this.state.selectedId ? this.state.products.find(product => product.id === this.state.selectedId) : {id: undefined, name: undefined, count: undefined, src: undefined}} />
          }
      </div>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired
    })
  ),
  shopName: PropTypes.string.isRequired
};

export default ProductsList;
