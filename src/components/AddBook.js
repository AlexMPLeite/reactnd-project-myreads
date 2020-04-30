import React from "react";
import PropTypes from "prop-types";

import * as BooksAPI from "../utils/BooksAPI";
import SearchBar from "./SearchBar";
import Book from "./Book";

class AddBook extends React.Component {
  static propTypes = {
    changeShelf: PropTypes.func.isRequired,
  };

  state = {
    query: "",
    bookList: [],
  };

  getBook = (query) => {
    this.setState({ query });

    if (query) {
      BooksAPI.search(query.trim(), 20).then((books) => {
        books.length > 0 && this.setState({ bookList: books });
      });
    } else this.setState({ bookList: [] });
  };

  render() {
    const { changeShelf } = this.props;
    const { bookList } = this.state;
    return (
      <div className="search-books">
        <SearchBar
          returnButton
          getBook={this.getBook}
          query={this.state.query}
        />
        <div className="search-books-results">
          {bookList.length > 0 && (
            <ol className="books-grid">
              {bookList.map((book) => (
                <Book key={book.id} book={book} changeShelf={changeShelf} />
              ))}
            </ol>
          )}
        </div>
      </div>
    );
  }
}

export default AddBook;
