import React from "react";
import { Route, Link } from "react-router-dom";

import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";
import BookList from "./components/Booklist";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({ books }));
  }

  render() {
    const { books } = this.state;
    console.log(books);

    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <div className="search-books">
              <div className="search-books-bar">
                <Link to="/" className="close-search">
                  Close
                </Link>
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" />
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid" />
              </div>
            </div>
          )}
        />

        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <BookList books={books} />
              <Link to="/search" className="open-search">
                <button>Add a book</button>
              </Link>
            </React.Fragment>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
