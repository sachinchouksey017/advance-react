import { createStore, applyMiddleware } from 'redux'
import rootReducer from '.'
import ReduxThunk from 'redux-thunk' // no changes here 
const store = createStore(rootReducer, applyMiddleware(ReduxThunk,))
export default store;