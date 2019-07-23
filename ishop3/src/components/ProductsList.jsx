import React from "react";
import PropTypes from "prop-types";

import Product from "./Product";
import ProductPreview from "./ProductPreview";
import ProductEdit from "./ProductEdit";

import Button from "./Button";

class ProductsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
      isEdit: false,
      isChanged: false,
      isNew: false,
      products: this.props.products
    };
  }

  editSelected = (id, isEdit) => {
    if (this.state.products.find(product => product.id === id)) {
      this.setState({ selectedId: id, isEdit: isEdit, isNew: false });
    }

  }

  changeHandler = () => {
    this.setState({ isChanged: true });
  }

  goBack = () => {
    if (this.state.isChanged) {
      if (window.confirm('Are you sure to go without saving?')) {
        this.editViewModeSwitcher();
      }
    }
    else {
      this.editViewModeSwitcher();
    }
  }

  editViewModeSwitcher = () => {
    this.setState({ isEdit: !this.state.isEdit, isChanged: false, isNew: false });
  }

  delHandler = (id) => {
    if (this.state.isEdit) return;
    if (window.confirm('Are you sure you wish to delete this item?')) {
      this.setState({ products: this.state.products.filter(product => product.id !== id), selectedId: undefined });
    }
  }

  addNew = () => {
    this.setState({ isEdit: true, selectedId: null, isChanged: false, isNew: true, product: { id: null, name: "", count: null, src: "", number: null } });
  }

  saveEdited = (obj) => {
    let indexOfEditedObject = this.state.products.findIndex(product => product.id === obj.id);
    if (indexOfEditedObject > -1) {
      const arrayCopy = this.state.products.slice();
      arrayCopy[indexOfEditedObject] = obj;
      this.setState({ products: arrayCopy, isChanged: false });
    }
    else {
      this.setState({ products: [...this.state.products, obj], isChanged: false });
    }
    this.editViewModeSwitcher();
  }

  render() {
    const { shopName } = this.props;
    const { products, isChanged } = this.state;
    let list = products.map(item => (
      <Product key={item.id}
        product={item}
        clickHandler={this.editSelected}
        delHandler={this.delHandler}
        selectedId={this.state.selectedId}
        isEdit={this.state.isEdit}
        isChanged={this.state.isChanged} />
    ));
    return (
      <div>
        <div className="header">
          <h2 className="header-title">{shopName}</h2>
          <Button disabled={isChanged} clickHandler={this.addNew} primary>+ Add new</Button>
        </div>
        <div className="product-list">
          {list}
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
            changedHandler={this.changeHandler}
            editViewModeSwitcher={this.editViewModeSwitcher}
            isChanged={this.state.isChanged}
            isNew={this.state.isNew}
            goBack={this.goBack}
            product={this.state.selectedId ? this.state.products.find(product => product.id === this.state.selectedId) : { id: null, name: "", count: null, src: "", number: null }} />
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
