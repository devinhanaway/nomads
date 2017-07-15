import {CURRENT_USER} from '../components/actions'


export default function Users(state = [], action = {}){
  switch(action.type){
    case CURRENT_USER:
      return action.currentUser
    default: return state;
  }
}
