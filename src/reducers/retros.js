import {
  GET_RETROS_REQUEST,
  GET_RETROS_REQUEST_SUCCESS,
  GET_RETROS_REQUEST_FAILURE
} from '../actions/getRetros';

import {
  ADD_RETRO_REQUEST,
  ADD_RETRO_REQUEST_SUCCESS,
  ADD_RETRO_REQUEST_FAILURE
} from '../actions/addRetro';

import {
  DELETE_RETRO_REQUEST,
  DELETE_RETRO_REQUEST_SUCCESS,
  DELETE_RETRO_REQUEST_FAILURE
} from '../actions/deleteRetro';

let initialState = {
  retrievedRetros: [],
  isFetching: false
}

let deleteFromArray = (array,item) => {
  let newArray = array.slice();
  let position = array.findIndex((element) => {
    return element.id === item;
  })
  newArray.splice(position,1);
  return newArray;
}

const retro = (state = initialState, action) => {
  switch(action.type) {
    case GET_RETROS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_RETROS_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        retrievedRetros: action.retros,
        isFetching: false
      });
    case GET_RETROS_REQUEST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    case ADD_RETRO_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case ADD_RETRO_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        retrievedRetros: state.retrievedRetros.concat(action.retro),
        isFetching: false
      });
    case ADD_RETRO_REQUEST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    case DELETE_RETRO_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case DELETE_RETRO_REQUEST_SUCCESS:
      let newRetros = deleteFromArray(state.retrievedRetros,action.retroId)
      return Object.assign({}, state, {
        retrievedRetros: newRetros,
        isFetching: false
      });
    case DELETE_RETRO_REQUEST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    default:
      return state;
  }
}

export default retro;
