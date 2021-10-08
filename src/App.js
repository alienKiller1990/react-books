import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux';
import Menu from './components/Menu';
import { setBooks } from './actions/books';
import { Container } from 'semantic-ui-react';
import BookCard from './components/BookCard';

class App extends React.Component {

  componentWillMount() {
    const { setBooks } = this.props
    axios.get('/books.json').then(({ data }) => {
      setBooks(data)
    })
  }

  render() {
    const { books, isReady } = this.props
    return (
      <Container>
        <Menu />
        <ul>
          {
            !isReady
              ? 'Загрузка..'
              : books.map(book => (
                <BookCard {...book}/>
              ))
          }
        </ul>
      </Container>
    )
  }
}

const mapStateToProps = ({ books }) => ({
  books: books.items,
  isReady: books.isReady
})

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
