import React from "react";
import PropTypes from "prop-types";

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
      }

      editValue = (value) => {
        this.setState({value: value}, () => this.props.changeHandler(this.props.name, this.state.value));
      }

  render() {
    const { label, type, isChanged } = this.props;

    return (
        <div className="input-wrap">
        <div className="input-labels">
            <label className="input-label">{label}</label>
            {(this.state.value==='' && isChanged) && <span className="input-error">Field must be filled</span>}
        </div>
        <input className="input" type={type} value={this.state.value} onChange={(e) => this.editValue(e.target.value)} />
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
