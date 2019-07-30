import { connect } from 'react-redux';
import CompareArtists from '../components/CompareArtists';
import { fetchArtist } from '../actions';

const mapStateToProps = state => ({
  artist1: state.artists.artist1,
  artist2: state.artists.artist2,
});

const mapDispatchToProps = dispatch => ({
  fetchArtist: (search, position) => dispatch(fetchArtist(search, position)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompareArtists);
