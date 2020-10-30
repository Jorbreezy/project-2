import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../App';

const app = express();

app.get('/*', (req, res) => {
  const markup = ReactDOMServer.renderToString(<App />);

  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Iso React</title>
  </head>
  <body>
    ${markup}
  </body>
  </html>
  `);
});

app.listen(4000, () => console.log('Listening on port 4000'));
