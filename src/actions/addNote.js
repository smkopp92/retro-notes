export const ADD_NOTE_REQUEST = "ADD_NOTE_REQUEST";
export const ADD_NOTE_REQUEST_SUCCESS = "ADD_NOTE_REQUEST_SUCCESS";
export const ADD_NOTE_REQUEST_FAILURE = "ADD_NOTE_REQUEST_FAILURE";

let addNoteRequest = () => {
  return {
    type: ADD_NOTE_REQUEST
  };
};

let addNoteRequestSuccess = data => {
  return {
    type: ADD_NOTE_REQUEST_SUCCESS,
    note: data
  };
};

let addNoteRequestFailure = () => {
  return {
    type: ADD_NOTE_REQUEST_FAILURE
  };
};

let headers = new Headers({
  'mode': 'cors',
  'Access-Control-Allow-Origin':'beepboop',
  'Content-Type': 'multipart/form-data'
})

let addNote = (newNote, retro) => dispatch => {
  dispatch(addNoteRequest())
  fetch(`http://localhost:3001/api/v1/retros/${retro}/notes`, {
    headers: headers,
    method: "POST",
    body: JSON.stringify(newNote)
  })
  .then((response) => response.json())
  .then((response) => dispatch(addNoteRequestSuccess(response)))
  .catch(() => dispatch(addNoteRequestFailure()))
};

export { addNote };
