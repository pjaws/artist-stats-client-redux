import { connect } from 'react-redux';
import { setPage } from '../actions';
import App from '../components/App';

const mapStateToProps = state => ({
  page: state.page,
});

const mapDispatchToProps = dispatch => ({
  setPage: page => dispatch(setPage(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
