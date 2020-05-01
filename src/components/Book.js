import React from "react";
import PropTypes from "prop-types";

import ChangeShelf from "./ChangeShelf";
import noCover from "../images/no-cover.png";

const Book = ({ book, books, changeShelf }) => {
  const multipleAuthors = () => {
    book.authors.map((author, index) => <div key={index}>{author}</div>);
  };
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              backgroundImage:
                book.imageLinks && book.imageLinks.thumbnail
                  ? `url(${book.imageLinks.thumbnail})`
                  : `url(${noCover}`,
            }}
          />
          <ChangeShelf book={book} books={books} changeShelf={changeShelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {!book.authors ? (
            <div>N/A</div>
          ) : (
            [book.authors.length > 1 ? multipleAuthors() : book.authors]
          )}
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default Book;
