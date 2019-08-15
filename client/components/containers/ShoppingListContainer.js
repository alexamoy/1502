import { connect } from 'react-redux';

import { fetchItems, addItemPost } from '../../store';
import ShoppingList from '../ShoppingList';

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => ({
  loadItems: () => {
    return dispatch(fetchItems());
  },
  addItem: (item) => {
    return dispatch(addItemPost(item));
  }
});

const ShoppingListContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
export default ShoppingListContainer;
