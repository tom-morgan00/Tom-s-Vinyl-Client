import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://toms-vinyl-server.herokuapp.com/api/v1',
});
