import commonStyles from "../stylesTheme/commonStyles";

const translateProps = props => {
  let _styles = { ...commonStyles.default };
  if (props.disabled) {
    _styles = { ..._styles, ...commonStyles.disabled };
  }
  if (props.primary) {
    _styles = { ..._styles, ...commonStyles.primary };
  }
  const newProps = { ...props, styles: _styles };
  return newProps;
};

export default WrappedComponent => {
  return function wrappedRender(args) {
    return WrappedComponent(translateProps(args));
  };
};
