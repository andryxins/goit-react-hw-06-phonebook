import { connect } from 'react-redux';
import PhoneBookList from './PhoneBookList';
import contactSlice from '../../redux/contactReducer/contactSlice';

const mapStateToProps = state => ({
  phoneBookItems: [...state.contacts],
  filterQuery: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactSlice.actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookList);
