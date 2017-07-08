import { combineReducers } from 'redux'

import users from './reducers/users'
import currentModal from './reducers/currentModal'

export default combineReducers({
  users,
  currentModal
})
