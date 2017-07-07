export const SET_USERS = "SET_USERS"
export const ADD_USER = "ADD_USER"

function handleReponse(response){
  if(response.ok){
    return response.json();
  }else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function setUsers(users){
  return {
    type: SET_USERS,
    users
  }
}

export function addUser(user){
  return {
    type: ADD_USER,
    user
  }
}

export function saveUser(data){
  return dispatch => {
     return fetch('http://localhost:8080/api/users', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleReponse)
    .then(data => dispatch(addUser(data.user)))
  }
}

export function fetchUsers() {
  return dispatch => {
    fetch('http://localhost:8080/api/users')
      .then(res => res.json())
      .then(data => dispatch(setUsers(data.users)))
  }
}
