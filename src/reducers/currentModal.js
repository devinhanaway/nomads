import {SET_MODAL} from '../components/actions'


export default function currentModal(state = [], action = {}){
  console.log(SET_MODAL);
  console.log(action);
  switch(action.type){
    case SET_MODAL:
      return action.currentModal
      ;
    default: return state;
  }
}
