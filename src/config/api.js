import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.trakt.tv',
  headers: {
    'Content-type': 'application/json',
    'trakt-api-key':
      '0f00ee655c3d90ced1d32bb6edc935c5d04b2fcff8be22ae41b6fb3603d42833',
    'trakt-api-version': 2,
  },
});

const apiOmd = axios.create({
  baseURL: 'http://www.omdbapi.com',
  headers: {
    'Content-type': 'application/json',
  },
});

export {api, apiOmd};
