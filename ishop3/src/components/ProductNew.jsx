import React from "react";
import PropTypes from "prop-types";


class ProductNew extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        id: this.props.product.id ? this.props.product.id : undefined,
        name: this.props.product.name ? this.props.product.name : undefined,
        price: this.props.product.price ? this.props.product.price : undefined,
        count: this.props.product.count ? this.props.product.count : undefined,
        src: this.props.product.src ? this.props.product.src : undefined
    };
  }

  editField = (fieldName, value) => {
    console.log(this.state);
    switch(fieldName) {
      case 'name':
        this.setState({name: value});
        break;
      case 'price':
        this.setState({price: value});
        break;
      case 'count':
        this.setState({count: value});
        break;
      case 'src':
        this.setState({src: value});
        break;
      default:
        break;
    }
  } 

    render() {
      const { name, price, count, src } = this.props.product;
      const { save, editViewModeSwitcher } = this.props;
      return (
        <div className="preview">
          <div className="preview-photo-wrap">
            <img className="preview-photo" src={src} alt={name} />
          </div>
          <div className="preview-content">
            <div className="preview-info">
              <input className="preview-input" value={this.state.name} onChange={(e) => this.editField('name', e.target.value)} />
              <input className="preview-input" value={this.state.price} onChange={(e) => this.editField('price', e.target.value)} />
              <input className="preview-input" value={this.state.count} onChange={(e) => this.editField('count', e.target.value)} />
              <input className="preview-input" value={this.state.src} onChange={(e) => this.editField('src', e.target.value)} />
            </div>
            <button onClick={() => save(this.state)}>Save</button>
            <button onClick={editViewModeSwitcher}>Back</button>
          </div>
        </div>
      );
    }
  }
  
  ProductNew.propTypes = {
    save: PropTypes.func,
    product: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.string,
      src: PropTypes.string,
      count: PropTypes.string
    })
  }
  
  export default ProductNew;
  