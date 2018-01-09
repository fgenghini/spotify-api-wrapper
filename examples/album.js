/* to run ./node_modules/.bin/babel-node album.js */

import SpotifyAPIWrapper from '../src/index';

global.fetch = require('node-fetch');

// Insert your API token here.
const spotify = new SpotifyAPIWrapper({
  apiAuthToken: '',
});

const albums = spotify.search.albums('Pearl Jam');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
