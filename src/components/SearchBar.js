import React from "react";

class SearchBar extends React.Component {
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  // onInputClick(event) {
  //   console.log("Input was Clicked");
  // }

  OnFormSubmit = event => {
    event.preventDefault();

    console.log(this.state.term);

    this.props.onSubmit(this.state.term);
  };

  state = { term: "" };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.OnFormSubmit}>
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input
              type="text"
              name=""
              id=""
              onClick={e => console.log("Input was clicked")}
              onChange={e => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
