import { connect } from 'react-redux';
import PhoneBookList from './PhoneBookList';
import { getFilteredContacts } from '../../redux/contactReducer/contactSelectors';

const mapStateToProps = state => ({
  phoneBookItems: getFilteredContacts(state),
});

export default connect(mapStateToProps)(PhoneBookList);
