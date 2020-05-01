import { connect } from 'react-redux';
import contactSlice from '../redux/contactReducer/contactSlice';
import filterSlice from '../redux/filterReducer/filterSlice';
import App from './App';

const mapStateToProps = state => ({
  phoneBookItems: [...state.contacts],
  filterQuery: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onAddContact: obj => dispatch(contactSlice.actions.addContact(obj)),
  onDeleteContact: id => dispatch(contactSlice.actions.deleteContact(id)),
  onChangeQuery: text => dispatch(filterSlice.actions.changeQuery(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
