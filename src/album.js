import SPOTIFY_API_URL from './config';

/* global fetch */

export const album = id =>
  fetch(`${SPOTIFY_API_URL}/albums/${id}`).then(data => data.json);

export const albums = ids =>
  fetch(`${SPOTIFY_API_URL}/albums/?ids=${ids}`).then(data => data.json);

export const albumTracks = id =>
  fetch(`${SPOTIFY_API_URL}/albums/${id}/tracks`).then(data => data.json);
