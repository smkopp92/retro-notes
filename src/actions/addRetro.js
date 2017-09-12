export const ADD_RETRO_REQUEST = "ADD_RETRO_REQUEST";
export const ADD_RETRO_REQUEST_SUCCESS = "ADD_RETRO_REQUEST_SUCCESS";
export const ADD_RETRO_REQUEST_FAILURE = "ADD_RETRO_REQUEST_FAILURE";

let addRetroRequest = () => {
  return {
    type: ADD_RETRO_REQUEST
  };
};

let addRetroRequestSuccess = data => {
  return {
    type: ADD_RETRO_REQUEST_SUCCESS,
    retro: data
  };
};

let addRetroRequestFailure = () => {
  return {
    type: ADD_RETRO_REQUEST_FAILURE
  };
};

let headers = new Headers({
  'mode': 'cors',
  'Access-Control-Allow-Origin':'beepboop',
  'Content-Type': 'multipart/form-data'
})

let addRetro = (newRetro) => dispatch => {
  dispatch(addRetroRequest())
  fetch(`https://la-retro-notes-api.herokuapp.com/api/v1/retros`, {
    headers: headers,
    method: "POST",
    body: JSON.stringify(newRetro)
  })
  .then((response) => response.json())
  .then((response) => dispatch(addRetroRequestSuccess(response)))
  .catch(() => dispatch(addRetroRequestFailure()))
};

export { addRetro };
