import React from "react";
import PropTypes from "prop-types";

import Input from "./Input";
import Button from "./Button";


class ProductEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.product.id,
      name: this.props.product.name,
      price: this.props.product.price,
      count: this.props.product.count,
      src: this.props.product.src,
      errors: {
        idError: false,
        nameError: false,
        priceError: false,
        countError: false,
        srcError: false
      },
      isFormValid: true
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!props.isChanged) {
      return {
        id: props.product.id,
        name: props.product.name,
        price: props.product.price,
        count: props.product.count,
        src: props.product.src
      };
    }
    return null;
  }

  editField = (fieldName, value) => {
    this.props.changedHandler();
    this.setState({ [fieldName]: value }, console.log(fieldName, value));
  }

  setValidationInfo = (fieldName, isError) => {
    let errors = this.state.errors;
    errors[fieldName + "Error"] = isError;
    let result = Object.keys(this.state.errors).reduce((sum, next) => sum || this.state.errors[next], false);
    this.setState({ errors, isFormValid: !result });
  }

  render() {
    const { name, src, price, id, count } = this.state;
    const { save, goBack, isNew, isChanged } = this.props;
    const { isFormValid } = this.state;
    return (
      <div key={isNew ? -1 : id}>
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
                value={isNew ? "" : name} changeHandler={this.editField}
                cbValidation={this.setValidationInfo}
                isChanged={isChanged} />
              <Input
                label="Price"
                name="price"
                type="number"
                value={isNew ? "" : price} changeHandler={this.editField}
                cbValidation={this.setValidationInfo}
                isChanged={isChanged} />
              <Input
                label="Count"
                name="count"
                type="number"
                value={isNew ? "" : count} changeHandler={this.editField}
                cbValidation={this.setValidationInfo}
                isChanged={isChanged} />
              <Input
                label="URL"
                name="src"
                type="text"
                value={isNew ? "" : src} changeHandler={this.editField}
                cbValidation={this.setValidationInfo}
                isChanged={isChanged} />
              <Input
                label="Id (only digits)"
                name="id"
                type="number"
                value={isNew ? "" : id} changeHandler={this.editField}
                cbValidation={this.setValidationInfo}
                isChanged={isChanged} />
            </div>
            <div className="edit-controls">
              <Button className="edit-button" clickHandler={goBack}>Back</Button>
              <Button disabled={!isFormValid || !this.state.id} clickHandler={() => save(this.state)} primary>Save</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductEdit.propTypes = {
  save: PropTypes.func,
  editViewModeSwitcher: PropTypes.func,
  changedHandler: PropTypes.func,
  isChanged: PropTypes.bool,
  isNew: PropTypes.bool,
  goBack: PropTypes.func,
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    src: PropTypes.string,
    count: PropTypes.number
  })
}

export default ProductEdit;
