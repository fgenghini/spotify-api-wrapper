import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists
} from '../src/search';

describe('Spotify Search', () => {
  let fetchStub;
  let promise;

  beforeEach( () => {
    fetchStub = sinon.stub(global, 'fetch');
    promise = fetchStub.returnsPromise();
  });

  afterEach( () => {
    fetchStub.restore();
  });

  describe('Smoke Tests', () => {

    it ('should exists the search method', () => {
      expect(search).to.exist;
    });

    it ('should exists the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it ('should exists the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it ('should exists the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it ('should exists the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });

  });

  describe('Default Search', () => {

    it('should call fetch function', () => {
      search();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should be called with the correct url', () => {
      search('Incubus', 'artist');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');
    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({body: 'json'});
      const artist = search('incubus', 'artist');
      expect(artist.resolveValue).to.be.eql({body: 'json'});
    });

  });

  describe('SearchArtists', () => {

    it('should call fetch function', () => {
      searchArtists();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should be called with the correct url', () => {
      searchArtists('Incubus');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');
    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({body: 'json'});
      const artist = searchArtists('incubus');
      expect(artist.resolveValue).to.be.eql({body: 'json'});
    });

  });

  describe('SearchAlbums', () => {

    it('should call fetch function', () => {
      searchAlbums();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should be called with the correct url', () => {
      searchAlbums('Incubus');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({body: 'json'});
      const artist = searchAlbums('incubus');
      expect(artist.resolveValue).to.be.eql({body: 'json'});
    });

  });

  describe('SearchTracks', () => {

    it('should call fetch function', () => {
      searchTracks();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should be called with the correct url', () => {
      searchTracks('Incubus');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');
    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({body: 'json'});
      const artist = searchTracks('incubus');
      expect(artist.resolveValue).to.be.eql({body: 'json'});
    });

  });

  describe('SearchPlaylists', () => {

    it('should call fetch function', () => {
      searchPlaylists();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should be called with the correct url', () => {
      searchPlaylists('Incubus');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');
    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({body: 'json'});
      const artist = searchPlaylists('incubus');
      expect(artist.resolveValue).to.be.eql({body: 'json'});
    });

  });

});
