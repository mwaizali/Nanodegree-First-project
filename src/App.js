import React from 'react';
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import LibraryBookList from './LibraryBookList';
import Search from './Search';


class Bookslibrary extends React.Component {
  state = {

    books: []
  
  }

  componentDidMount() {
  //After the render the page the comehere grab the data of books from the booksAPI
    BooksAPI.getAll().then(books => {this.setState({books})})
  
  }


  onShelf = (book, shelf) => {
  //when we want to change the state of book and set in a particular shelf just the book and shelf  
    book.shelf = shelf
    this.setState(state => ({
      books: state
        .books
        .filter(b => b.id !== book.id)
        .concat([book])
    }))
    BooksAPI.update(book, shelf)
  }

  render() {

    return (
      <div className="app">
        <Route
          path="/"
          exact
          render={() => (
          <div>
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <LibraryBookList books={this.state.books} onShelf={this.onShelf}/>
          </div>
        )}/>

        <Route
          path="/search"
          render={({history}) => (<Search
          onShelf={this.onShelf}
          history={history}
          books={this.state.books}/>)}/>
      </div>
    )
  }
}

export default Bookslibrary