import React from 'react';
import { connect } from 'react-redux';
import { setPage } from '../actions';
import SingleArtistSearch from '../components/SingleArtistSearch';
import CompareArtists from '../components/CompareArtists';

const App = ({ page, dispatch }) => {
  const showSingle = page === 'SingleArtist' ? true : false;
  return (
    <div className="App">
      {showSingle && (
        <div>
          <SingleArtistSearch />
          <button
            className="button"
            onClick={() => dispatch(setPage('CompareArtists'))}
          >
            Want to compare artists instead?
          </button>
        </div>
      )}
      {!showSingle && (
        <div>
          <CompareArtists searchedArtist={{}} />
          <button
            className="button is-info"
            onClick={() => dispatch(setPage('SingleArtist'))}
          >
            Back to Search
          </button>
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  const { page } = state;
  return { page };
}

export default connect(mapStateToProps)(App);
