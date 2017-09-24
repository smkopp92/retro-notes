export const GET_USER = "GET_USER";

let getUserRequestSuccess = data => {
  return {
    type: GET_USER,
    user: data
  };
};

let headers = new Headers({
  'mode': 'cors',
  'Content-Type': 'multipart/form-data'
})

let getUser = () => dispatch => {
  fetch(`http://localhost:3002/api/v1/user`, {
    credentials: 'include',
    headers: headers
  })
  .then((response) => response.json())
  .then((response) => {
    dispatch(getUserRequestSuccess(response.user))
  })
};

export { getUser };
