import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SearchBar = ({ query, returnButton, getBook }) => {
  const button = (
    <Link to="/" className="close-search">
      Close
    </Link>
  );

  const handleChangeInput = (event) => {
    getBook(event.target.value);
  };

  return (
    <div className="search-books-bar">
      {returnButton ? button : ""}
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          value={query}
          onChange={handleChangeInput}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  returnButton: PropTypes.bool,
  getBook: PropTypes.func.isRequired,
};

export default SearchBar;
