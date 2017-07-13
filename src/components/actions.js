export const SET_USERS = "SET_USERS"
export const ADD_USER = "ADD_USER"
export const CURRENT_USER = "CURRENT_USER"
export const SET_MODAL = "SET_MODAL"

function handleReponse(response){
  console.log(response);
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

export function currentUser(currentUser){
  console.log(currentUser);
  return {
    type: CURRENT_USER,
    currentUser
  }
}

export function addUser(user){
  console.log(user);
  return {
    type: ADD_USER,
    user
  }
}

export function setModal(currentModal){
    console.log(currentModal);
  return{
    type: SET_MODAL,
    currentModal
  }
}

// export function Modal(data){
//   setModal(data)
// }
// store.dispatch(sModal())

export function Modal(data){
  return dispatch => {
    dispatch(setModal(data))
  }
}

export function Signup(data){
  return dispatch => {
     return fetch('http://localhost:8080/api/users/new', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleReponse)
    .then(data => dispatch(addUser(data.user)))
  }
}




export function loginUser(data){
  console.log(data);
  return dispatch => {
    return fetch('http://localhost:8080/api/users/'+data)
    .then(handleReponse)
    .then(data => dispatch(currentUser(data.user)))
  }
}

export function loginUserAuth(data){
  console.log(data);
  return dispatch => {
    return fetch('http://localhost:8080/api/users/'+data,
    {
     method: 'post',
     body: JSON.stringify(data),
     headers: {
       "Content-Type": "application/json"
     }
   }
  )
    .then(handleReponse)
    .then(data => dispatch(currentUser(data.user)))
  }
}


export function fetchUsers() {
  return dispatch => {
    fetch('http://localhost:8080/api/users')
      .then(res => res.json())
      .then(data => dispatch(setUsers(data.user)))
  }
}
