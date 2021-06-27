import { combineReducers } from 'redux'
import noteReducer from './reducers/reducers'
import createReducer from './reducers/create-reducer'
const rootReducer = combineReducers({ noteReducer, createReducer })
export default rootReducer