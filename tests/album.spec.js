import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import SpotifyAPIWrapper from '../src/index';

describe('Spotify Album API', () => {
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

    it ('should exists the getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    });

    it ('should exists the albums method', () => {
      expect(spotify.album.getAlbums).to.exist;
    });

    it ('should exists the albumTracks method', () => {
      expect(spotify.album.getTracks).to.exist;
    });
  });

  describe('Album Method', () => {

    it('should call fetch function', () => {
       spotify.album.getAlbum();
       expect(fetchStub).to.have.been.calledOnce;
    });

    it('should be called with the correct url', () => {
      spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');
    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({body: 'json'});
      const artist = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(artist.resolveValue).to.be.eql({body: 'json'});
    });
  });

  describe('Albums Method', () => {

    it('should call fetch function', () => {
      spotify.album.getAlbums();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should be called with the correct url', () => {
      spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTz']);
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTz');
    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({body: 'json'});
      const artist = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTz']);
      expect(artist.resolveValue).to.be.eql({body: 'json'});
    });

  });

  describe('AlbumTracks Method', () => {

    it('should call fetch function', () => {
      spotify.album.getTracks();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should be called with the correct url', () => {
      spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({body: 'json'});
      const artist = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(artist.resolveValue).to.be.eql({body: 'json'});
    });
  });

});
