/*eslint linebreak-style: ["error", "windows"] */

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

export function getAllProducts() {
  return axios.get('/phones')
    .then(res => res.data);
}
