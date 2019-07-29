export const GET_ARTIST = 'GET_ARTIST';
export const UPDATE_ARTIST = 'UPDATE_ARTIST';

export const getArtist = search => ({ type: GET_ARTIST, search });
export const updateArtist = (id, data) => ({ type: UPDATE_ARTIST, id, data });
