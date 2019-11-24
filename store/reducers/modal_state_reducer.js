import { SHOW_HIDE_MODAL } from '../actions/action_types';
const INITIAL_STATE = false


function modalReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case  SHOW_HIDE_MODAL: {
      return  action.payload
    }
    default : return state;
  }
}
export default modalReducer;