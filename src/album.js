import APP_CONFIG from './config';
import toJSON from './utils';

/* global fetch */

export const album = id =>
  fetch(`${APP_CONFIG.SPOTIFY_API_URL}/albums/${id}`).then(toJSON);

export const albums = ids =>
  fetch(`${APP_CONFIG.SPOTIFY_API_URL}/albums/?ids=${ids}`).then(toJSON);

export const albumTracks = id =>
  fetch(`${APP_CONFIG.SPOTIFY_API_URL}/albums/${id}/tracks`).then(toJSON);
