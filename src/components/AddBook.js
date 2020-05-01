import React from "react";
import PropTypes from "prop-types";

import * as BooksAPI from "../utils/BooksAPI";
import SearchBar from "./SearchBar";
import Book from "./Book";

class AddBook extends React.Component {
  static propTypes = {
    changeShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
  };

  state = {
    query: "",
    bookList: [],
    error: false,
  };

  getBook = (query) => {
    this.setState({ query });

    if (query) {
      BooksAPI.search(query.trim(), 20).then((books) => {
        books.length > 0
          ? this.setState({ bookList: books, error: false })
          : this.setState({ bookList: [], error: true });
      });

      // if query is empty => reset state to default
    } else this.setState({ bookList: [], error: false });
  };

  render() {
    const { books, changeShelf } = this.props;
    const { bookList, error } = this.state;
    return (
      <div className="search-books">
        <SearchBar
          returnButton
          getBook={this.getBook}
          query={this.state.query}
        />
        <div className="search-books-results">
          {bookList.length > 0 && (
            <div>
              <h4>{`${bookList.length} Books found...`}</h4>
              <ol className="books-grid">
                {bookList.map((book) => (
                  <Book
                    key={book.id}
                    book={book}
                    books={books}
                    changeShelf={changeShelf}
                  />
                ))}
              </ol>
            </div>
          )}
          {error && <h4>Sorry, no books found. Please try again!</h4>}
        </div>
      </div>
    );
  }
}

export default AddBook;
