/*eslint linebreak-style: ["error", "windows"] */

import axios from 'axios';

axios.defaults.baseURL = 'https://fe-jul-catalog-server.herokuapp.com/';

export function getAllProducts() {
  return axios.get('/phones')
    .then(res => res.data);
}
