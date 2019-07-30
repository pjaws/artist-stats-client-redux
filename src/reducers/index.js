import { combineReducers } from 'redux';
import { RECEIVE_ARTIST_ONE, RECEIVE_ARTIST_TWO, SET_PAGE } from '../actions';

const artists = (state = { artist1: null, artist2: null }, action) => {
  switch (action.type) {
    case RECEIVE_ARTIST_ONE:
      return { ...state, artist1: action.payload.data };
    case RECEIVE_ARTIST_TWO:
      return { ...state, artist2: action.payload.data };
    default:
      return state;
  }
};

const page = (state = 'SingleArtist', action) => {
  switch (action.type) {
    case SET_PAGE:
      return action.payload.page;
    default:
      return state;
  }
};

export default combineReducers({ artists, page });
