import { connect } from 'react-redux';

import { fetchItems } from '../../store';
import ShoppingList from '../ShoppingList';

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => ({
  loadItems: () => {
    return dispatch(fetchItems());
  }
});

const ShoppingListContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
export default ShoppingListContainer;
