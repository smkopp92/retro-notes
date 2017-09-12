import { deselectNote } from './selectNote'
export const EDIT_NOTE_REQUEST = "EDIT_NOTE_REQUEST";
export const EDIT_NOTE_REQUEST_SUCCESS = "EDIT_NOTE_REQUEST_SUCCESS";
export const EDIT_NOTE_REQUEST_FAILURE = "EDIT_NOTE_REQUEST_FAILURE";

let editNoteRequest = () => {
  return {
    type: EDIT_NOTE_REQUEST
  };
};

let editNoteRequestSuccess = data => {
  return {
    type: EDIT_NOTE_REQUEST_SUCCESS,
    note: data
  };
};

let editNoteRequestFailure = () => {
  return {
    type: EDIT_NOTE_REQUEST_FAILURE
  };
};

let headers = new Headers({
  'mode': 'cors',
  'Access-Control-Allow-Origin':'beepboop',
  'Content-Type': 'multipart/form-data'
})

let editNote = (newNote) => dispatch => {
  dispatch(editNoteRequest())
  fetch(`https://la-retro-notes-api.herokuapp.com/api/v1/notes/${newNote.id}`, {
    headers: headers,
    method: "PATCH",
    body: JSON.stringify(newNote)
  })
  .then((response) => response.json())
  .then((response) => {
    dispatch(editNoteRequestSuccess(response))
    Promise.resolve()
    .then(() => dispatch(deselectNote()))
  })
  .catch(() => dispatch(editNoteRequestFailure()))
};

export { editNote };
