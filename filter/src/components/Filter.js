import React from "react";
import PropTypes from "prop-types";

class Filter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        searchText: '',
        shouldBeSorted: false,
        processedStrings: this.props.strings
    };
  }

  inputHandler = (event) => {
    this.setState({searchText: event.target.value}, this.processStrings);
  }
  resetInput = () => {
    this.setState({searchText: '', shouldBeSorted: false});
  }

  toggleSort = (event) => {
    this.setState({shouldBeSorted: event.target.checked}, this.processStrings);
  }

  processStrings = () => {
    let res = this.props.strings.slice();
    if (this.state.searchText) res.filter(s => s.text.indexOf(this.state.searchText) !== -1);
    if (this.state.shouldBeSorted) {res = this.sortArray(res);}
    this.setState({processedStrings: res});
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
    const { shouldBeSorted, searchText, processedStrings } = this.state;

    return (
      <div>
        <div className="top-line">
          <input type="checkbox" checked={shouldBeSorted} onClick={this.toggleSort}/>
          <input type="text" value= {searchText} onChange={this.inputHandler}/>
          <button onClick={this.resetInput}>Reset</button>
        </div>
        <div className="list">
          {processedStrings.map(item => {
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
