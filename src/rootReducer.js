import { combineReducers } from 'redux'

import users from './reducers/users'
import currentUser from './reducers/currentuser'

export default combineReducers({
  users,
  currentUser
})
