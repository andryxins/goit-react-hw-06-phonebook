import { connect } from 'react-redux';
import * as contactsActions from '../redux/contactReducer/contactsActions';
import * as filterActions from '../redux/filterReducer/filterActions';
import App from './App';

const mapStateToProps = state => ({
  phoneBookItems: [...state.contacts],
  filterQuery: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onAddContact: obj => dispatch(contactsActions.addContact(obj)),
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
  onChangeQuery: text => dispatch(filterActions.changeQuery(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
