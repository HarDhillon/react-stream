import { combineReducers } from 'redux'
import { reducer } from './redux-form';
import authReducer from './authReucer'

export default combineReducers({
  auth: authReducer,
  form: reducer
})