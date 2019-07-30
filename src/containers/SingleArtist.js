import { connect } from 'react-redux';
import { fetchArtist } from '../actions';
import SingleArtist from '../components/SingleArtist';

const mapStateToProps = state => ({
  artist1: state.artists.artist1,
});

const mapDispatchToProps = dispatch => ({
  fetchArtist: (search, position) => dispatch(fetchArtist(search, position)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleArtist);
