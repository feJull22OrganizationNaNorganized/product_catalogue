'use strict';

import express from 'express';
import path from 'path';
// import phonesFromServer from '../data/api/phones.json'
import { readFile } from 'fs/promises';
import cors from 'cors';

const app = express();
const port = 8080;

app.use(express.static('data'))
app.use(express.json());
app.use(cors());

const phones = JSON.parse(
  await readFile(
    new URL('data/api/phones.json', import.meta.url),
    'utf-8'
));

app.get('/phones', (req, res) => {
  console.log('Server is running');
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.send(phones);
});

app.listen(port);
