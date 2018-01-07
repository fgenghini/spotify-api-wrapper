import APP_CONFIG from './config';
import toJSON from './utils';

/* global fetch */

export const search = (query, type) =>
  fetch(`${APP_CONFIG.SPOTIFY_API_URL}/search?q=${query}&type=${type}`).then(toJSON);

export const searchArtists = query =>
  search(query, 'artist');

export const searchAlbums = query =>
  search(query, 'album');

export const searchTracks = query =>
  search(query, 'track');

export const searchPlaylists = query =>
  search(query, 'playlist');
