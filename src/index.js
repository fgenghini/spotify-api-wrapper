import {
  album,
  albums,
  albumTracks,
} from './album';

import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from './search';

import { setAuthToken } from './authentication';

module.exports = {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists,
  album,
  albums,
  albumTracks,
  setAuthToken,
};
