'use strict';
import express from 'express';
// import phonesFromServer from '../data/api/phones.json'
import { readFile } from 'fs/promises';
import cors from 'cors';
import path from 'path';
import { dirname } from 'path';


const __dirname = path.resolve();

const app = express();
const port = process.env.PORT || 8080;
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist/dist/data')));
app.use(express.json());
const phones = JSON.parse(await readFile(new URL('dist/data/api/phones.json', import.meta.url), 'utf-8'));
app.get('/phones', (req, res) => {
    console.log('Server is running');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(phones);
});
app.listen(port);
