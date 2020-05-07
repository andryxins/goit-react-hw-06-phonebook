import { connect } from 'react-redux';
import contactSlice from '../../redux/contactReducer/contactSlice';
import PhoneBookFields from './PhoneBookFields';

const mapStateToProps = state => ({
  phoneBookItems: [...state.contacts],
});

const mapDispatchToProps = dispatch => ({
  onAddContact: obj => dispatch(contactSlice.actions.addContact(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookFields);
