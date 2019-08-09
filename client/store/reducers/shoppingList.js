import axios from 'axios';

//action creator name
const GET_ITEMS = 'GET_ITEMS';

//action creator
export const getItems = items => ({ type: GET_ITEMS, items });

//thunk
export const fetchItems = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/items');
      const items = response.data;
      dispatch(getItems(items));
    } catch (error) {
      console.error(error);
    }
  };
};

export default (state = [], action) => {
  switch (action.type) {
  case GET_ITEMS:
    return action.items;
  default:
    return state;
  }
};
