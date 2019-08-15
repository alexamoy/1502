import axios from 'axios';

//action creator name
const GET_ITEMS = 'GET_ITEMS';
const ADD_ITEM = 'ADD_ITEMS';

//action creator
export const getItems = items => ({ type: GET_ITEMS, items });
export const addItem = item => ({ type: ADD_ITEM, item });

//thunk
export const fetchItems = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/items');
      const items = response.data;
      dispatch(getItems(items));
    } catch (err) {
      console.error(err);
    }
  };
};

export const addItemPost = (body) => {
  return async dispatch => {
    try {
      const response = await axios.post('/api/items', body);
      const newItem = response.data;
      dispatch(addItem(newItem));
    } catch (err) {
      console.error(err);
    }
  };
};

export default (state = [], action) => {
  switch (action.type) {
  case GET_ITEMS:
    return action.items;
  case ADD_ITEM:
    return [...state, [...state.items, action.item]];
  default:
    return state;
  }
};
