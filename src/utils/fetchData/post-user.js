const url = "https://cardley-api.herokuapp.com/"

const getJSON = (response, errorMessage) => {
  if (!response.ok) {
    throw new Error(`${errorMessage}, status: ${response.status}`)
  }
  return response.json();
}

const postFetch = ({endpoint, body, errorMessage}) => {
  const headers ={
    "content-type": "application/JSON",
  }
  const fetchObj={
    method: "POST",
    mode: "cors",
    headers,
    body
  }

  url += endpoint;

  return fetch(url, fetchObj)
    .then(res => getJSON(res, errorMessage))
    .catch(console.error) // SEND ERROR PAGE AS WELL!
}

export default postFetch;
