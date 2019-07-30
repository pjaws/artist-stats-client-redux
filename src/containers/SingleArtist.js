import { connect } from 'react-redux';
import { receiveArtist } from '../actions';
import SingleArtist from '../components/SingleArtist';

const mapStateToProps = state => ({
  artist1: state.artists.artist1,
});

const mapDispatchToProps = dispatch => ({
  receiveArtist: (data, position) => dispatch(receiveArtist(data, position)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleArtist);
