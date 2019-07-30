import React from 'react';
import ArtistSearchBox from '../containers/ArtistSearchBox';
import ArtistComparisonResult from './ArtistComparisonResult';

const CompareArtists = ({ artist1, artist2, receiveArtist }) => {
  return (
    <section className="section">
      <h1 className="title is-1 is-spaced">Compare artists</h1>
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <div className="columns">
            <div className="column">
              {!artist1 && <ArtistSearchBox position={1} />}
              {artist1 && (
                <ArtistComparisonResult
                  artist={artist1}
                  onBackClick={() => receiveArtist(null, 1)}
                />
              )}
            </div>
            <div className="column">
              {!artist2 && <ArtistSearchBox position={2} />}
              {artist2 && (
                <ArtistComparisonResult
                  artist={artist2}
                  onBackClick={() => receiveArtist(null, 2)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareArtists;
