import {
  SELECT_NOTE,
  DESELECT_NOTE
} from '../actions/selectNote';

let initialState = {
  id: null
}

const selectedNote = (state = initialState, action) => {
  switch(action.type) {
    case SELECT_NOTE:
      return Object.assign({}, state, {
        id: action.selectedNote
      });
    case DESELECT_NOTE:
      return Object.assign({}, state, {
        id: null
      });
    default:
      return state;
  }
}

export default selectedNote;
