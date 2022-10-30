'use strict';

import express from 'express';
import path from 'path';
// import phonesFromServer from '../data/api/phones.json'
import { readFile } from 'fs/promises';

const app = express();
const port = 8080;

app.use(express.static(path.resolve('public')));
app.use(express.json());

const phones = JSON.parse(
  await readFile(
    new URL('../data/api/phones.json', import.meta.url)
  )
);

app.get('/phones', (req, res) => {
  console.log('Server is running');
  res.send(phones);
});

app.listen(port);
