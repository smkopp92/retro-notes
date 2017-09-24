import {
  GET_USER
} from '../actions/getUser';

let initialState = {
  name: null
}

const currentUser = (state = initialState, action) => {
  switch(action.type) {
    case GET_USER:
      return Object.assign({}, state, {
        name: action.user
      });
    default:
      return state;
  }
}

export default currentUser;
