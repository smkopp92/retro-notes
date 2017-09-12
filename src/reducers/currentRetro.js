import {
  SET_RETRO
} from '../actions/getNotes';

let initialState = {
  name: ""
}

const currentRetro = (state = initialState, action) => {
  switch(action.type) {
    case SET_RETRO:
      return Object.assign({}, state, {
        name: action.retro
      });
    default:
      return state;
  }
}

export default currentRetro;
