import { connect } from 'react-redux';
import App from '../components/App';
import * as bookActions from '../actions/books';
import { bindActionCreators } from 'redux';
import orderBy from 'lodash/orderBy';

const sortBy = (books, filterBy) => {
    switch (filterBy) {
        case 'price_high':
            return orderBy(books, 'price', 'desc');
        case 'price_low':
            return orderBy(books, 'price', 'asc');
        case 'author':
            return orderBy(books, 'author', 'asc');
        default:
            return books;
    }
}
const filterBooks = (books, searchQuery) => {
    return books.filter(obj =>
        obj.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
        obj.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    );
};

const searchBooks = (books, filterBy, searchQuery) => {
    return sortBy(filterBooks(books, searchQuery), filterBy)
}

const mapStateToProps = ({ books, filter }) => ({
    books: books.items && searchBooks(books.items, filter.filterBy, filter.searchQuery),
    isReady: books.isReady
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(bookActions, dispatch),
})



export default connect(mapStateToProps, mapDispatchToProps)(App);