import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  phoneBookItems: [...state.contacts],
});

export default connect(mapStateToProps)(App);
