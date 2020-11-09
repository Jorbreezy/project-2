import path from 'path';
import fs from 'fs';

import dotenv from 'dotenv';

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from '../src/App.jsx';

import games from './routes/games';
import makers from './routes/maker';
import errorHandler from '../utils/errorHandler';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(express.json());
app.use('/api', games, makers);

app.get('/*', (req, res) => {
  const context = {};

  const markup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>,
  );

  const htmlFile = fs.readFileSync('public/index.html').toString();
  const split = htmlFile.split('Not Rendered');

  res.send(split[0] + markup + split[1]);
  res.end();
});

app.use(errorHandler);

export default app;
