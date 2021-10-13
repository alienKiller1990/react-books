import { connect } from 'react-redux';
import App from '../components/App';
import * as bookActions from '../actions/books';
import { bindActionCreators } from 'redux';

const mapStateToProps = ({ books }) => ({
    books: books.items,
    isReady: books.isReady
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(bookActions, dispatch),
})



export default connect(mapStateToProps, mapDispatchToProps)(App);