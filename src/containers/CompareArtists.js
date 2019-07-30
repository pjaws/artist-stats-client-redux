import { connect } from 'react-redux';
import CompareArtists from '../components/CompareArtists';
import { receiveArtist } from '../actions';

const mapStateToProps = state => ({
  artist1: state.artists.artist1,
  artist2: state.artists.artist2,
});

const mapDispatchToProps = dispatch => ({
  receiveArtist: (data, position) => dispatch(receiveArtist(data, position)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompareArtists);
