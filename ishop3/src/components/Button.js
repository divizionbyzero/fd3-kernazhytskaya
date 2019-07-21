import React from "react";
import stylesWrapper from "../HOC/stylesWrapper";

const Button = props => {
  const {styles, clickHandler, disabled} = props;
  return (
    <button disabled={disabled} style={styles} onClick={clickHandler}>
      {props.children}
    </button>
  );
};

export default stylesWrapper(Button);
