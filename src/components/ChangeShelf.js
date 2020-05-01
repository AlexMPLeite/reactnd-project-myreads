import React from "react";
import PropTypes from "prop-types";

const ChangeShelf = ({ book, books, changeShelf }) => {
  const onChangeShelf = (event) => {
    changeShelf(book, event.target.value);
  };

  const checkShelf = () => {
    for (let item of books) {
      if (item.id === book.id) {
        return item.shelf;
      }
    }
    return "none";
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={onChangeShelf} defaultValue={checkShelf()}>
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
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
};
export default ChangeShelf;
