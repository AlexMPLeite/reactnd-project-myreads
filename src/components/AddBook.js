import React from "react";
import PropTypes from "prop-types";

import SearchBar from "./SearchBar";

class AddBook extends React.Component {
  state = {
    query: "",
  };

  render() {
    return (
      <div className="search-books">
        <SearchBar returnButton />
        <div className="search-books-results">
          <ol className="books-grid" />
        </div>
      </div>
    );
  }
}

export default AddBook;
