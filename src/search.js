import SPOTIFY_API_URL from './config';

/* global fetch */

export const search = (query, type) =>
  fetch(`${SPOTIFY_API_URL}/search?q=${query}&type=${type}`).then(data => data.json);

export const searchArtists = query =>
  search(query, 'artist');

export const searchAlbums = query =>
  search(query, 'album');

export const searchTracks = query =>
  search(query, 'track');

export const searchPlaylists = query =>
  search(query, 'playlist');
