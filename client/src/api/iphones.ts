/*eslint linebreak-style: ["error", "windows"] */

import axios from 'axios';

axios.defaults.baseURL = 'https://product-catalog-back.onrender.com/';

export function getAllProducts() {
  return axios.get('/phones')
    .then(res => res.data);
}
