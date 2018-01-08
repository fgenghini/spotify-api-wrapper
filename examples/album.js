/* to run ./node_modules/.bin/babel-node album.js */

import { setAuthToken, searchAlbums } from '../src/index';

global.fetch = require('node-fetch');

// Insert your API token here.
setAuthToken('');

const albums = searchAlbums('Pearl Jam');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
