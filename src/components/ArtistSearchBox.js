import React, { useState } from 'react';

const ArtistSearchBox = ({ position, fetchArtist }) => {
  const [artist, setArtist] = useState('');
  const [error, setError] = useState('');

  const validateForm = input => {
    let error = '';
    if (input === '') {
      error = 'Please enter an artist name.';
    }
    setError(error);
  };

  const handleChange = event => {
    setError('');
    setArtist(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    validateForm(artist);

    if (error.length) return;

    fetchArtist(artist.trim(), position);
  };

  return (
    <form onSubmit={handleSubmit} className="artist-search">
      <div className="field has-addons has-addons-centered">
        <div className="control">
          <input
            className="input"
            name="artist"
            id="artist"
            value={artist}
            placeholder="Search for an artist"
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <button type="submit" className="button is-primary">
            Go!
          </button>
        </div>
      </div>
      <small className="has-text-danger">{error}</small>
    </form>
  );
};

export default ArtistSearchBox;
