import { connect } from 'react-redux';
import { fetchArtist } from '../actions';
import ArtistSearchBox from '../components/ArtistSearchBox';

const mapStateToProps = (state, ownProps) => ({
  position: ownProps.position,
});

const mapDispatchToProps = dispatch => ({
  fetchArtist: (search, position) => dispatch(fetchArtist(search, position)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtistSearchBox);
