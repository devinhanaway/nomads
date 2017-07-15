import jwt from 'jsonwebtoken'

function createOptionsWithMethod(method, body) {
  const token = localStorage.getItem('jwtToken');
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  };
}
function createGetMethod(method) {
  const token = localStorage.getItem('jwtToken');
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  };
}

export function decodejwt(){
  const token = localStorage.getItem('jwtToken');
  console.log(token);
  let data = jwt.decode(token)
  console.log(data);
  return data
}

export function fetchJSON(url) {
  return fetch(url, createGetMethod('GET'))
    .then(res => res.json());
}

export function postJSON(url, body) {
  return fetch(url, createOptionsWithMethod('POST', body))
    .then(res => res.json());
}

export function deleteJSON(url, body) {
  return fetch(url, createOptionsWithMethod('DELETE', body))
    .then(res => res.json());
}
