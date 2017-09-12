export const DELETE_NOTE_REQUEST = "DELETE_NOTE_REQUEST";
export const DELETE_NOTE_REQUEST_SUCCESS = "DELETE_NOTE_REQUEST_SUCCESS";
export const DELETE_NOTE_REQUEST_FAILURE = "DELETE_NOTE_REQUEST_FAILURE";

let deleteNoteRequest = () => {
  return {
    type: DELETE_NOTE_REQUEST
  };
};

let deleteNoteRequestSuccess = data => {
  return {
    type: DELETE_NOTE_REQUEST_SUCCESS,
    noteId: data
  };
};

let deleteNoteRequestFailure = () => {
  return {
    type: DELETE_NOTE_REQUEST_FAILURE
  };
};

let headers = new Headers({
  'mode': 'cors',
  'Access-Control-Allow-Origin':'beepboop',
  'Content-Type': 'multipart/form-data'
})

let deleteNote = (noteId) => dispatch => {
  dispatch(deleteNoteRequest())
  fetch(`https://retro-notes-api.herokuapp.com/api/v1/notes/${noteId}`, {
    headers: headers,
    method: "DELETE"
  })
  .then((response) => dispatch(deleteNoteRequestSuccess(noteId)))
  .catch(() => dispatch(deleteNoteRequestFailure()))
};

export { deleteNote };
