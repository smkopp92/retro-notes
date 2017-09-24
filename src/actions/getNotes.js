export const GET_NOTES_REQUEST = "GET_NOTES_REQUEST";
export const GET_NOTES_REQUEST_SUCCESS = "GET_NOTES_REQUEST_SUCCESS";
export const GET_NOTES_REQUEST_FAILURE = "GET_NOTES_REQUEST_FAILURE";
export const SET_EMOTION = "SET_EMOTION";
export const SET_RETRO = "SET_RETRO";


let setRetro = (retro) => {
  return {
    type: SET_RETRO,
    retro: retro
  }
}

let setEmotionAction = (emotion) => {
  return {
    type: SET_EMOTION,
    emotion: emotion
  }
}

let getNotesRequest = () => {
  return {
    type: GET_NOTES_REQUEST
  };
};

let getNotesRequestSuccess = data => {
  return {
    type: GET_NOTES_REQUEST_SUCCESS,
    notes: data
  };
};

let getNotesRequestFailure = () => {
  return {
    type: GET_NOTES_REQUEST_FAILURE
  };
};

let headers = new Headers({
  'mode': 'cors',
  'Access-Control-Allow-Origin':'beepboop',
  'Content-Type': 'multipart/form-data'
})

let getNotes = (retro) => dispatch => {
  dispatch(getNotesRequest())
  fetch(`http://localhost:3002/api/v1/retros/${retro}/notes`, {
    headers: headers
  })
  .then((response) => response.json())
  .then((response) => {
    dispatch(getNotesRequestSuccess(response.notes))
    dispatch(setRetro(response.retro))
  })
  .catch(() => dispatch(getNotesRequestFailure()))
};

let setEmotion = (emotion) => dispatch => {
  dispatch(setEmotionAction(emotion))
};

export { getNotes, setEmotion };
