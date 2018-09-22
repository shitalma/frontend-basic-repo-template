import axios from 'axios';

const requestMethods = {
  GET: 'get',
};

const config = {
  responseType: 'json',
  maxContentLength: 2000,
};

const getCacheHeaders = () => ({
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache',
});

const fetch = (method, url) => {
  const headers = getCacheHeaders();
  return axios
    .request({ method, url, ...config, headers })
    .then(response => response);
};

export const get = url => fetch(requestMethods.GET, url);
export const post = () => fetch();
