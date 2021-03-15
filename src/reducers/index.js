import { combineReducers } from 'redux'
import authReducer from './authReucer'

export default combineReducers({
  auth: authReducer
})