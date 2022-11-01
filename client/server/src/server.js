'use strict';

import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static(path.resolve('public')));

app.get('/', (req, res) => {
  console.log('Server is running');
  res.end('<h1>Team Hello</h1>')
})

app.listen(port);
