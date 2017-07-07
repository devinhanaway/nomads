import { SET_USERS, ADD_USER} from '../components/actions'


export default function Users(state = [], action = {}){
  switch(action.type){
    case ADD_USER:
      return [
        ...state,
        action.user
      ];
    case SET_USERS:
      return action.users
    default: return state;
  }
}
