/* global fetch  */
import APP_CONFIG from './config';
import toJSON from './utils';

import album from './album';
import search from './search';

export default class SpotifyAPIWrapper {
  constructor(options) {
    this.apiUrl = options.apiUrl || APP_CONFIG.SPOTIFY_API_URL;
    this.apiAuthToken = options.apiAuthToken;

    this.album = album.bind(this)();
    this.search = search.bind(this)();
  }

  request(url) {
    const authHeader = this.getAuthHeader();

    return fetch(url, authHeader).then(toJSON);
  }

  getAuthHeader() {
    if (this.apiAuthToken === undefined) {
      return {};
    }

    return {
      headers: {
        Authorization: `Bearer ${this.apiAuthToken}`,
      },
    };
  }
}
