import React from "react";
import PropTypes from "prop-types";

import ChangeShelf from "./ChangeShelf";

const Book = ({ book, changeShelf }) => {
  const multipleAuthors = book.authors.map((author, index) => (
    <div key={index}>{author}</div>
  ));

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          />
          <ChangeShelf book={book} changeShelf={changeShelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors.length > 1 ? multipleAuthors : book.authors}
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default Book;
