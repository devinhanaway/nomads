import { combineReducers } from 'redux'

import users from './reducers/users'
import currentUser from './reducers/currentuser'
import currentConnections from './reducers/currentconnections'

export default combineReducers({
  users,
  currentUser,
  currentConnections
})
