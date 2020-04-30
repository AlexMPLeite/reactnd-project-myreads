import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SearchBar = ({ returnButton }) => {
  const button = (
    <Link to="/" className="close-search">
      Close
    </Link>
  );

  return (
    <div className="search-books-bar">
      {returnButton ? button : ""}
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title or author" />
      </div>
    </div>
  );
};

export default SearchBar;
