import { connect } from 'react-redux';
import filterSlice from '../../redux/filterReducer/filterSlice';
import PhoneBookSearchField from './PhoneBookSearchField';

const mapStateToProps = state => ({
  filterQuery: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onChangeQuery: text => dispatch(filterSlice.actions.changeQuery(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhoneBookSearchField);
