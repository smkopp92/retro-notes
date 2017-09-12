import {
  GET_NOTES_REQUEST,
  GET_NOTES_REQUEST_SUCCESS,
  GET_NOTES_REQUEST_FAILURE,
  SET_EMOTION
} from '../actions/getNotes';

import {
  ADD_NOTE_REQUEST,
  ADD_NOTE_REQUEST_SUCCESS,
  ADD_NOTE_REQUEST_FAILURE
} from '../actions/addNote';

import {
  DELETE_NOTE_REQUEST,
  DELETE_NOTE_REQUEST_SUCCESS,
  DELETE_NOTE_REQUEST_FAILURE
} from '../actions/deleteNote';

import {
  EDIT_NOTE_REQUEST,
  EDIT_NOTE_REQUEST_SUCCESS,
  EDIT_NOTE_REQUEST_FAILURE
} from '../actions/editNote';

let initialState = {
  retrievedNotes: [],
  emotion: "",
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

let editFromArray = (array,item) => {
  let newArray = array.slice();
  let position = array.findIndex((element) => {
    return element.id === item.id;
  })
  newArray.splice(position,1,item);
  return newArray;
}

const note = (state = initialState, action) => {
  switch(action.type) {
    case GET_NOTES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_NOTES_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        retrievedNotes: action.notes,
        isFetching: false
      });
    case GET_NOTES_REQUEST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    case SET_EMOTION:
      return Object.assign({}, state, {
        emotion: action.emotion
      });
    case ADD_NOTE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case ADD_NOTE_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        retrievedNotes: state.retrievedNotes.concat(action.note),
        isFetching: false
      });
    case ADD_NOTE_REQUEST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    case DELETE_NOTE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case DELETE_NOTE_REQUEST_SUCCESS:
      let newNotes = deleteFromArray(state.retrievedNotes,action.noteId)
      return Object.assign({}, state, {
        retrievedNotes: newNotes,
        isFetching: false
      });
    case DELETE_NOTE_REQUEST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    case EDIT_NOTE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case EDIT_NOTE_REQUEST_SUCCESS:
      let editedNotes = editFromArray(state.retrievedNotes,action.note)
      return Object.assign({}, state, {
        retrievedNotes: editedNotes,
        isFetching: false
      });
    case EDIT_NOTE_REQUEST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    default:
      return state;
  }
}

export default note;
