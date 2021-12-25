import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import {
  userLoginReducer,
  userRegisterReducer,
  userListReducer
} from './userReducers';

export default combineReducers({
  todos,
  visibilityFilter,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
});