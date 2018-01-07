import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import {
  album,
  albums,
  albumTracks
} from '../src/album';

describe('Spotify Album API', () => {
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

    it ('should exists the album method', () => {
      expect(album).to.exist;
    });

    it ('should exists the albums method', () => {
      expect(albums).to.exist;
    });

    it ('should exists the albumTracks method', () => {
      expect(albumTracks).to.exist;
    });
  });

  describe('Album Method', () => {

    it('should call fetch function', () => {
       album();
       expect(fetchStub).to.have.been.calledOnce;
    });

    it('should be called with the correct url', () => {
      album('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');
    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({body: 'json'});
      const artist = album('4aawyAB9vmqN3uQ7FjRGTy');
      expect(artist.resolveValue).to.be.eql({body: 'json'});
    });
  });

  describe('Albums Method', () => {

    it('should call fetch function', () => {
      albums();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should be called with the correct url', () => {
      albums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTz']);
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTz');
    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({body: 'json'});
      const artist = albums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTz']);
      expect(artist.resolveValue).to.be.eql({body: 'json'});
    });

  });

  describe('AlbumTracks Method', () => {

    it('should call fetch function', () => {
      albumTracks();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should be called with the correct url', () => {
      albumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({body: 'json'});
      const artist = albumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(artist.resolveValue).to.be.eql({body: 'json'});
    });
  });

});
