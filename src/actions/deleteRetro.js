export const DELETE_RETRO_REQUEST = "DELETE_RETRO_REQUEST";
export const DELETE_RETRO_REQUEST_SUCCESS = "DELETE_RETRO_REQUEST_SUCCESS";
export const DELETE_RETRO_REQUEST_FAILURE = "DELETE_RETRO_REQUEST_FAILURE";

let deleteRetroRequest = () => {
  return {
    type: DELETE_RETRO_REQUEST
  };
};

let deleteRetroRequestSuccess = data => {
  return {
    type: DELETE_RETRO_REQUEST_SUCCESS,
    retroId: data
  };
};

let deleteRetroRequestFailure = () => {
  return {
    type: DELETE_RETRO_REQUEST_FAILURE
  };
};

let headers = new Headers({
  'mode': 'cors',
  'Access-Control-Allow-Origin':'beepboop',
  'Content-Type': 'multipart/form-data'
})

let deleteRetro = (retroId) => dispatch => {
  dispatch(deleteRetroRequest())
  fetch(`http://localhost:3002/api/v1/retros/${retroId}`, {
    headers: headers,
    method: "DELETE"
  })
  .then((response) => dispatch(deleteRetroRequestSuccess(retroId)))
  .catch(() => dispatch(deleteRetroRequestFailure()))
};

export { deleteRetro };
