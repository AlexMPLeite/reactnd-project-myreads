import React from "react";
import PropTypes from "prop-types";

import Bookshelf from "./Bookshelf";

const BookList = ({ bookListTitle, books }) => {
  const shelfs = [
    { value: "currentlyReading", title: "Currently Reading" },
    { value: "wantToRead", title: "Want to Read" },
    { value: "read", title: "Read" },
  ];

  return (
    <React.Fragment>
      <div className="list-books-title">
        <h1>{bookListTitle ? bookListTitle : "My Reads"}</h1>
      </div>
      <div className="list-books">
        <div className="list-books-content">
          {shelfs.map((shelf, index) => {
            const filteredBooks = books.filter(
              (book) => book.shelf === shelf.value
            );
            return (
              <Bookshelf key={index} books={filteredBooks} shelf={shelf} />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

BookList.propTypes = {
  bookListTitle: PropTypes.string,
  books: PropTypes.array.isRequired,
};

export default BookList;
