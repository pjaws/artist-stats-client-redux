import React from 'react';
import ArtistForm from './ArtistForm';
import ArtistResults from './ArtistResults';

const SingleArtistSearch = ({ artist1, receiveArtist }) => {
  return (
    <>
      {!artist1 && <ArtistForm />}
      {artist1 && (
        <ArtistResults
          artistData={artist1}
          onBackClick={() => receiveArtist(null, 1)}
        />
      )}
    </>
  );
};

export default SingleArtistSearch;
