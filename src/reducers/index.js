import { combineReducers } from 'redux'
import {
  userLoginReducer,
  userRegisterReducer,
  userListReducer
} from './userReducers';

export default combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
});