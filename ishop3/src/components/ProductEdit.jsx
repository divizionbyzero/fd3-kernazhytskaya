import React from "react";
import PropTypes from "prop-types";

import Input from "./Input";

class ProductPreview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.product.id,
      name: this.props.product.name,
      price: this.props.product.price,
      count: this.props.product.count,
      src: this.props.product.src
    };
  }

  editField = (fieldName, value) => {
    this.props.changedHandler();
    switch (fieldName) {
      case 'id':
        this.setState({ id: value });
        break;
      case 'name':
        this.setState({ name: value });
        break;
      case 'price':
        this.setState({ price: value });
        break;
      case 'count':
        this.setState({ count: value });
        break;
      case 'src':
        this.setState({ src: value });
        break;
      default:
        break;
    }
  }

  render() {
    const { name, src } = this.props.product;
    const { save, editViewModeSwitcher, isNew, isChanged } = this.props;
    return (
      <React.Fragment>
        <h3 className="preview-title">{isNew ? 'Add Product' : 'Edit Product'}</h3>
        <div className="edit">
          <div className="edit-photo-wrap">
            <img className="edit-photo" src={src} alt={name} />
          </div>
          <div className="edit-content">
            <div className="edit-info">
              <Input
                label="Name"
                name="name"
                type="text"
                value={isNew ? undefined : this.state.name} changeHandler={this.editField}
                isChanged={isChanged}/>
              <Input
                label="Price"
                name="price"
                type="number"
                value={isNew ? undefined : this.state.price} changeHandler={this.editField}
                isChanged={isChanged}/>
              <Input
                label="Count"
                name="count"
                type="number"
                value={isNew ? undefined : this.state.count} changeHandler={this.editField}
                isChanged={isChanged}/>
              <Input
                label="URL"
                name="src"
                type="text"
                value={isNew ? undefined : this.state.src} changeHandler={this.editField}
                isChanged={isChanged}/>
              <Input
                label="Id (only digits)"
                name="id"
                type="number"
                value={isNew ? undefined : this.state.id} changeHandler={this.editField}
                isChanged={isChanged}/>
            </div>
            <div className="edit-controls">
              <button className="edit-button" onClick={() => save(this.state)}>Save</button>
              <button className="edit-button" onClick={editViewModeSwitcher}>Back</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ProductPreview.propTypes = {
  save: PropTypes.func,
  editViewModeSwitcher: PropTypes.func,
  changedHandler: PropTypes.func,
  isChanged: PropTypes.bool,
  isNew: PropTypes.bool,
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    src: PropTypes.string,
    count: PropTypes.number
  })
}

export default ProductPreview;
