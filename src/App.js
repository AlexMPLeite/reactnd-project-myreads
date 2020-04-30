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
            <div className="list-books">
              <BookList />
              <Link to="/search" className="open-search">
                <button>Add a book</button>
              </Link>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
