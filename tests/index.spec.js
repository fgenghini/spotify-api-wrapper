import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

import SpotifyAPIWrapper from '../src/index';


describe('SpotifyAPIWrapper Lib', () => {
  let fetchStub;
  let promise;

  beforeEach( () => {
    fetchStub = sinon.stub(global, 'fetch');
    promise = fetchStub.returnsPromise();
  });

  afterEach( () => {
    fetchStub.restore();
  });

  it('should create an instance of SpotifyAPIWrapper', () => {
    const spotify = new SpotifyAPIWrapper({});
    expect(spotify).to.be.instanceof(SpotifyAPIWrapper);
  });

  it('should have a default value for apiUrl', () => {
    const spotify = new SpotifyAPIWrapper({});

    expect(spotify.apiUrl).to.be.eql('https://api.spotify.com/v1');
  });

  it('should receive apiUrl as an option', () => {
    const spotify = new SpotifyAPIWrapper({
      apiUrl: 'https://api.spotify.com/v1'
    });

    expect(spotify.apiUrl).to.be.equal('https://api.spotify.com/v1');
  });

  it('should receive the apiAuthToken as an option', () => {
    const spotify = new SpotifyAPIWrapper({
      apiAuthToken: 'foo',
    });

    expect(spotify.apiAuthToken).to.be.equal('foo');
  });

  describe('Request Method', () => {

    it('should have a request method', () => {
      const spotify = new SpotifyAPIWrapper({});
      expect(spotify.request).to.exist;
    });

    it('should call fetch method with correct params', () => {
      const spotify = new SpotifyAPIWrapper({});

      spotify.request('https://api.spotify.com/v1');

      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1');
    });

  });

  describe('getAuthHeader', () => {

    it('should generate the correct authentication header', () => {
      const spotify = new SpotifyAPIWrapper({
        apiAuthToken: 'fooToken',
      });

      expect(spotify.getAuthHeader()).to.be.eql({ headers: { Authorization: 'Bearer fooToken' } })
    });

  });

});