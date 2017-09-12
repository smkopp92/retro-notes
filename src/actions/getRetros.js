export const GET_RETROS_REQUEST = "GET_RETROS_REQUEST";
export const GET_RETROS_REQUEST_SUCCESS = "GET_RETROS_REQUEST_SUCCESS";
export const GET_RETROS_REQUEST_FAILURE = "GET_RETROS_REQUEST_FAILURE";

let getRetrosRequest = () => {
  return {
    type: GET_RETROS_REQUEST
  };
};

let getRetrosRequestSuccess = data => {
  return {
    type: GET_RETROS_REQUEST_SUCCESS,
    retros: data
  };
};

let getRetrosRequestFailure = () => {
  return {
    type: GET_RETROS_REQUEST_FAILURE
  };
};

let headers = new Headers({
  'mode': 'cors',
  'Access-Control-Allow-Origin':'beepboop',
  'Content-Type': 'multipart/form-data'
})

let getRetros = () => dispatch => {
  dispatch(getRetrosRequest())
  fetch(`http://retro-notes-api.herokuapp.com/api/v1/retros`, {
    headers: headers
  })
  .then((response) => response.json())
  .then((response) => dispatch(getRetrosRequestSuccess(response)))
  .catch(() => dispatch(getRetrosRequestFailure()))
};

export { getRetros };
