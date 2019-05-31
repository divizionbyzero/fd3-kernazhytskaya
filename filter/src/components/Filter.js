import React from "react";
import PropTypes from "prop-types";

class Filter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        searchText: '',
        shouldBeSorted: false,
        array: this.props.strings.slice(0)
    };
  }

  inputHandler = (event) => {
    this.setState({searchText: event.target.value});
  }
  resetInput = () => {
    this.setState({searchText: ''});
  }

  toggleSort = () => {
    this.setState({shouldBeSorted: !this.state.shouldBeSorted});
  }

  sortArray = (arr) => {
    const arrCopied = arr.slice(0);
    arrCopied.sort(function(a, b) {
      var textA = a.text.toLowerCase();
      var textB = b.text.toLowerCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
  return arrCopied;
  }

  render() {
    const { shouldBeSorted, searchText, array } = this.state;

    return (
      <div>
        <div className="top-line">
          <input type="checkbox" onClick={this.toggleSort}/>
          <input type="text" value= {searchText} onChange={this.inputHandler}/>
          <button onClick={this.resetInput}>Reset</button>
        </div>
        <div className="list">
          {shouldBeSorted ?
          this.sortArray(array).map(item => {
            if (item.text.search(searchText) > -1) return <div key={item.code}>{item.text}</div>; return '';
          })
          : 
          array.map(item => {
            if (item.text.search(searchText) > -1) return <div key={item.code}>{item.text}</div>; return '';
          })}
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  strings: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Filter;
