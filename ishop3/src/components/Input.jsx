import React from "react";
import PropTypes from "prop-types";

class Input extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value,
            isError: false
        };
      }

      editValue = (event) => {
        const value = event.target.value;
        const {changeHandler, name} = this.props;
        this.setState({value: value}, () => changeHandler(name, value));
      }

      checkIsEmpty = (e) => {
        const value = e.target.value;
        this.setState({isError: value === '' && this.props.isChanged}, () => this.props.cbValidation(this.props.name, this.state.isError));
        
      }

  render() {
    const { label, type, name } = this.props;
    const { isError, value } = this.state;
    return (
      <div className="input-wrap">
        <div className="input-labels">
            <label className="input-label">{label}</label>
            {isError && <span className="input-error">{name} must be filled</span>}
        </div>
        <input className="input"
          type={type}
          value={value}
          onChange={this.editValue}
          onBlur={this.checkIsEmpty}
          />
      </div>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string, 
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isChanged: PropTypes.bool
}

export default Input;
