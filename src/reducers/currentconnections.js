import {CURRENT_CONNECTIONS} from '../components/actions'


export default function Users(state = [], action = {}){
  switch(action.type){
    case CURRENT_CONNECTIONS:
      return action.currentConnections
    default: return state;
  }
}
