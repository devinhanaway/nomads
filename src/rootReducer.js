import { combineReducers } from 'redux'

import users from './reducers/users'
import currentUser from './reducers/currentuser'
import currentConnections from './reducers/currentconnections'
import requestConnections from './reducers/requestconnections'

export default combineReducers({
  users,
  currentUser,
  currentConnections,
  requestConnections
})
