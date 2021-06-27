import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '.'
import ReduxThunk from 'redux-thunk' // no changes here 
import rootSaga from './sagas/root.saga'
// for redux thunk
// const store = createStore(rootReducer, applyMiddleware(ReduxThunk,))

// for redux saga

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware,))
// Then run the saga
sagaMiddleware.run(rootSaga)
export default store;