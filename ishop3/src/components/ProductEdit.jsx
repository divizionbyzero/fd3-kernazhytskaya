import React from "react";
import PropTypes from "prop-types";

import Input from "./Input";
import Button from "./Button";


class ProductPreview extends React.Component {

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

  editField = (fieldName, value) => {
    this.props.changedHandler();
    this.setState({ [fieldName]: value });
  }

  setValidationInfo = (fieldName, isError) => {
    let errors = this.state.errors;
    errors[fieldName + "Error"] = isError;
    let result = Object.keys(this.state.errors).reduce((sum, next) => sum || this.state.errors[next], false);
    this.setState({errors, isFormValid: !result});
  }

  render() {
    const { name, src, price } = this.props.product;
    const { save, goBack, isNew, isChanged } = this.props;
    const { isFormValid } = this.state;
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
                value={isNew ? undefined : name} changeHandler={this.editField}
                cbValidation={this.setValidationInfo}
                isChanged={isChanged}/>
              <Input
                label="Price"
                name="price"
                type="number"
                value={isNew ? undefined : price} changeHandler={this.editField}
                cbValidation={this.setValidationInfo}
                isChanged={isChanged}/>
              <Input
                label="Count"
                name="count"
                type="number"
                value={isNew ? undefined : this.state.count} changeHandler={this.editField}
                cbValidation={this.setValidationInfo}
                isChanged={isChanged}/>
              <Input
                label="URL"
                name="src"
                type="text"
                value={isNew ? "" : this.state.src} changeHandler={this.editField}
                cbValidation={this.setValidationInfo}
                isChanged={isChanged}/>
              <Input
                label="Id (only digits)"
                name="id"
                type="number"
                value={isNew ? "" : this.state.id} changeHandler={this.editField}
                cbValidation={this.setValidationInfo}
                isChanged={isChanged}/>
            </div>
            <div className="edit-controls">
              <Button className="edit-button" clickHandler={goBack}>Back</Button>
              <Button disabled={!isFormValid || !this.state.id} clickHandler={() => save(this.state)} primary>Save</Button>
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
  goBack: PropTypes.func,
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    src: PropTypes.string,
    count: PropTypes.number
  })
}

export default ProductPreview;
