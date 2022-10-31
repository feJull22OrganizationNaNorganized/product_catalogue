'use strict';

import express from 'express';
import path from 'path';
// import phonesFromServer from '../data/api/phones.json'
import { readFile } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.resolve('public')));
app.use(express.json());

const phones = JSON.parse(
  await readFile(
    new URL('data/api/phones.json', import.meta.url),
    'utf-8'
));

app.get('/phones', (req, res) => {
  console.log(`Server running on http://localhost:${PORT}`);
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.send(phones);
});

app.use('*',(req, res) => {
  res.sendStatus(404);
});

app.listen(PORT);
