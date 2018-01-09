import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import SpotifyAPIWrapper from '../src/index';

describe('Spotify Search', () => {
  let spotify;

  let fetchStub;
  let promise;

  beforeEach( () => {
    spotify = new SpotifyAPIWrapper({
      apiAuthToken: 'fooToken',
    });
    fetchStub = sinon.stub(global, 'fetch');
    promise = fetchStub.returnsPromise();
  });

  afterEach( () => {
    fetchStub.restore();
  });

  describe('Smoke Tests', () => {

    it ('should exists the searchAlbums method', () => {
      expect(spotify.search.albums).to.exist;
    });

    it ('should exists the searchArtists method', () => {
      expect(spotify.search.artists).to.exist;
    });

    it ('should exists the searchTracks method', () => {
      expect(spotify.search.tracks).to.exist;
    });

    it ('should exists the searchPlaylists method', () => {
      expect(spotify.search.playlists).to.exist;
    });

  });

  describe('SearchArtists', () => {

    it('should call fetch function', () => {
      spotify.search.artists();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should be called with the correct url', () => {
      spotify.search.artists('Incubus');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');
    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({body: 'json'});
      const artist = spotify.search.artists('incubus');
      expect(artist.resolveValue).to.be.eql({body: 'json'});
    });

  });

  describe('SearchAlbums', () => {

    it('should call fetch function', () => {
      spotify.search.albums();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should be called with the correct url', () => {
      spotify.search.albums('Incubus');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({body: 'json'});
      const artist = spotify.search.albums('incubus');
      expect(artist.resolveValue).to.be.eql({body: 'json'});
    });

  });

  describe('SearchTracks', () => {

    it('should call fetch function', () => {
      spotify.search.tracks();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should be called with the correct url', () => {
      spotify.search.tracks('Incubus');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');
    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({body: 'json'});
      const artist = spotify.search.tracks('incubus');
      expect(artist.resolveValue).to.be.eql({body: 'json'});
    });

  });

  describe('SearchPlaylists', () => {

    it('should call fetch function', () => {
      spotify.search.playlists();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should be called with the correct url', () => {
      spotify.search.playlists('Incubus');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');
    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({body: 'json'});
      const artist = spotify.search.playlists('incubus');
      expect(artist.resolveValue).to.be.eql({body: 'json'});
    });

  });

});
