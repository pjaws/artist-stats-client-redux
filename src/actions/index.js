export const RECEIVE_ARTIST_ONE = 'RECEIVE_ARTIST_ONE';
export const RECEIVE_ARTIST_TWO = 'RECEIVE_ARTIST_TWO';
export const SET_PAGE = 'SET_PAGE';

export const receiveArtist = (data, position) => {
  if (position === 1) {
    return {
      type: RECEIVE_ARTIST_ONE,
      payload: {
        data,
      },
    };
  }
  return {
    type: RECEIVE_ARTIST_TWO,
    payload: { data },
  };
};
export const fetchArtist = (search, position) => dispatch => {
  return fetch(`https://r5gg4.sse.codesandbox.io/artists?q=${search}`)
    .then(response => response.json())
    .then(data => {
      console.log('data');
      console.log(data);
      dispatch(receiveArtist(data, position));
    });
};

export const setPage = page => ({ type: SET_PAGE, payload: { page } });
