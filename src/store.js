import { createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'

import rootReducer from './reducers'

// function reducer(state=[], action) {
//     return state
// }


export default () => {
    const store = createStore(rootReducer, applyMiddleware(logger))

    return store
};

// const store = create()


// store.dispatch({
//     type: 'ADD_TODO',
//     text: 'frontend'
// })

// console.log(store.getState())