import { SET_USERS, ADD_USER, CURRENT_USER, CURRENT_TOKEN} from '../components/actions'


export default function Users(state = [], action = {}){
  console.log(SET_USERS);
  console.log(action.user);
  switch(action.type){
    case ADD_USER:
      return [
        ...state,
        action.user
      ];
    case SET_USERS:
      return action.users
    case CURRENT_TOKEN:
      return [
        ...state,
        action.token
      ]
    case CURRENT_USER:
      return action.currentUser
    default: return state;
  }
}
