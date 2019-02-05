import { connect } from 'react-redux';

import { fetchUsers } from '../../store';
import Home from '../Home';

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => ({
  loadUsers: () => {
    return dispatch(fetchUsers());
  }
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;
