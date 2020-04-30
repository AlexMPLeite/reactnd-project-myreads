import React from "react";
import { Route, Link } from "react-router-dom";

import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";
import BookList from "./components/Booklist";
import AddBook from "./components/AddBook";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({ books }));
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;

      this.setState((previousState) => ({
        books: previousState.books
          .filter((previousBook) => previousBook.id !== book.id)
          .concat(book),
      }));
    });
  };

  render() {
    const { books } = this.state;
    console.log(books);

    return (
      <div className="app">
        <Route path="/search" render={() => <AddBook />} />

        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <BookList books={books} changeShelf={this.changeShelf} />
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
