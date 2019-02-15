import axios from 'axios';

//action creator name
const GET_USERS = 'GET_USERS';
// const ADD_USER = 'ADD_USER';

//action creator
export const getUsers = users => ({ type: GET_USERS, users });

// /export const addUser = user => ({ type: ADD_USER, user });

//thunk
export const fetchUsers = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/users');
      const users = response.data;
      dispatch(getUsers(users));
    } catch (error) {
      console.error(error);
    }
  };
};

export default (state = [], action) => {
  switch (action.type) {
  case GET_USERS:
    return action.users;
  default:
    return state;
  }
};
