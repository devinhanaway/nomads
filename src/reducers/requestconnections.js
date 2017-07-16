import {REQUEST_CONNECTIONS} from '../components/actions'


export default function Users(state = [], action = {}){
  switch(action.type){
    case REQUEST_CONNECTIONS:
      return action.requestConnections
    default: return state;
  }
}
