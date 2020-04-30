import React from "react";
import PropTypes from "prop-types";

const ChangeShelf = ({ book, changeShelf }) => {
  const onChangeShelf = (event) => {
    changeShelf(book, event.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={onChangeShelf} defaultValue={book.shelf}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

ChangeShelf.propTypes = {
  book: PropTypes.object.isRequired,
  changeShelf: PropTypes.func.isRequired,
};
export default ChangeShelf;
