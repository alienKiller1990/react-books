import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux';
import { setBooks } from './actions/books';
import { Menu } from 'semantic-ui-react'

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
      <>
        <Menu>
          <Menu.Item
            name='browse'
            onClick={this.handleItemClick}
          >
            Browse
          </Menu.Item>

          <Menu.Item
            name='submit'
            onClick={this.handleItemClick}
          >
            Submit
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item
              name='signup'
              onClick={this.handleItemClick}
            >
              Sign Up
            </Menu.Item>

            <Menu.Item
              name='help'
              onClick={this.handleItemClick}
            >
              Help
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <ul>
          {
            !isReady
              ? 'Загрузка..'
              : books.map(book => (
                <li><b>{book.title}</b> - {book.author}</li>
              ))
          }
        </ul>
      </>
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
