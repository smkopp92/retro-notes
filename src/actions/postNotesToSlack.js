let headers = new Headers({
  'mode': 'cors',
  'Access-Control-Allow-Origin':'beepboop',
  'Content-Type': 'multipart/form-data'
})

let postNotesToSlack = (retro) => dispatch => {
  fetch(`http://localhost:3001/api/v1/retros/${retro}/slack`, {
    headers: headers
  })
};

export { postNotesToSlack };
