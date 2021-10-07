import React from 'react'
import { connect } from 'react-redux';
import { setBooks } from './actions/books';
import books from './reducers/books';


class App extends React.Component {

  render() {
    const { books } = this.props.books
    const { setBooks } = this.props
    const newBooks = [
      {
        id: 0,
        title: 'Shoping Cart'
      }

    ]
    return (
      <div>
        <h1>{books[0].title}</h1>
        <button onClick={setBooks.bind(this,newBooks)}>Показать книги</button>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
