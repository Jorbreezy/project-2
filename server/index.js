/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import path from 'path';

import dotenv from 'dotenv';

import express from 'express';
import ReactDOMServer from 'react-dom/server';
/* import loadable from './dist/loadble.json';
  import { render } from 'react-dom';
  import { Provider } from 'react-redux';
  import { createStore } from 'redux';
  import rootReducer from '../src/reducers';
  const { assets } = loadable.entrypoints.main;

  const javascripts = assests.filter(asset => asset.endsWith('.js'));
  const stylesheets = assets.filter(asset => asset.endsWith('.css'));

  const scriptTaps = javascripts.filter(src => `<script src='${src}'></script>`);
  const styleTags = stylesheets.filter(src =>
    `<link href='${src}' rel='stylesheet' type='text/css'>`);

*/
import games from './routes/games';
import makers from './routes/maker';
import errorHandler from '../utils/errorHandler';
import App from '../src/App';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();

app.use(express.static(path.join(__dirname, '../build')));
app.use(express.json());
app.use('/api', games, makers);

app.get('/*', (req, res) => {
  const markup = ReactDOMServer.renderToString(<App />);

  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Gameserfy</title>
  </head>
  <body>
    <div id='root'>${markup}</div>
    <script src="/dist/bundle.js"></script>
  </body>
  </html>
  `);
});

app.use(errorHandler);

export default app;
