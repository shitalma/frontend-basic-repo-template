import axios from 'axios';
import sinon from 'sinon';

import * as http from './fetch';

describe('Fetch', () => {
  let requestStub;
  beforeEach(() => {
    requestStub = sinon.stub(axios, 'request');
  });

  afterEach(() => {
    requestStub.reset();
  });

  it('should make get call with proper parameters calls', done => {
    requestStub.callsFake(() => Promise.resolve());

    http.get('url').then(() => {
      expect(requestStub.calledOnce).toBeTruthy();

      const requestBody = requestStub.getCall(0).args[0];
      expect(requestBody.url).toBe('url');
      expect(requestBody.method).toBe('get');
      expect(requestBody.headers).toEqual({
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      });
      expect(requestBody.maxContentLength).toBe(2000);
      expect(requestBody.responseType).toBe('json');
      done();
    });
  });
});
