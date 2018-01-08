import APP_CONFIG from './config';
import toJSON from './utils';
import { getAuthHeader } from './authentication';

/* global fetch */

export const album = id =>
  fetch(`${APP_CONFIG.SPOTIFY_API_URL}/albums/${id}`, getAuthHeader()).then(toJSON);

export const albums = ids =>
  fetch(`${APP_CONFIG.SPOTIFY_API_URL}/albums/?ids=${ids}`, getAuthHeader()).then(toJSON);

export const albumTracks = id =>
  fetch(`${APP_CONFIG.SPOTIFY_API_URL}/albums/${id}/tracks`, getAuthHeader()).then(toJSON);
