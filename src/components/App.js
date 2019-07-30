import React from 'react';
import SingleArtist from '../containers/SingleArtist';
import CompareArtists from '../containers/CompareArtists';

const App = ({ page, setPage }) => {
  const showSingle = page === 'SingleArtist' ? true : false;
  return (
    <div className="App">
      {showSingle && (
        <div>
          <SingleArtist />
          <button className="button" onClick={() => setPage('CompareArtists')}>
            Want to compare artists instead?
          </button>
        </div>
      )}
      {!showSingle && (
        <div>
          <CompareArtists />
          <button
            className="button is-info"
            onClick={() => setPage('SingleArtist')}
          >
            Back to Search
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
