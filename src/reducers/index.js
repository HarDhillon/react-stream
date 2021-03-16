import { combineReducers } from 'redux'
import { reducer as formReducer} from './redux-form';
import authReducer from './authReucer'

export default combineReducers({
  auth: authReducer,
  form: formReducer
})