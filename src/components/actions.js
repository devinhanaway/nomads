export const SET_USERS = "SET_USERS"
export const ADD_USER = "ADD_USER"


function handleReponse(response){
  console.log(response);
  if(response.ok){
    console.log(response.json());
    return response.json();
  }else {
    console.log("really?");
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}


export function setUsers(users){
  console.log(users);
  return {
    type: SET_USERS,
    users
  }
}

export function addUser(user){
  console.log(user);
  return {
    type: ADD_USER,
    user
  }
}


export function Signup(data){
  console.log(data);
  return dispatch => {
     return fetch('http://localhost:8080/api/users/register', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleReponse)
    .then(data => dispatch(addUser(data.users)))
  }
}
export function checkUser(data){
  return dispatch => {
     return fetch('http://localhost:8080/api/users/', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleReponse)
    .then(data => dispatch(check(data.user)))
  }
}


export function fetchUsers() {
  console.log("something cooll");
  return dispatch => {
    fetch('http://localhost:8080/api/users/getall')
      .then(res => res.json())
      .then(data => dispatch(setUsers(data.users)))
  }
}
