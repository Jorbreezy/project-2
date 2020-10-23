import db from '../db/db';
import { makerExists } from './maker.controller';


// CREATE

export const createGame = (req, res, next) => {
  const { title, maker, type, price } = req.body;
  let brand = maker;

  const index = Object.keys(db.games).length;
  const mlength = Object.keys(db.makers).length;

  for (const key in db.games) {
    if (db.games[key].title === title) {
      return res.status(406).send('Game already exists!');
    }
  }

  if (makerExists(maker)) {
    brand = Object.keys(db.makers).find(key => db.makers[key] === maker);
  } else {
    db.makers[mlength] = maker;
    brand = `${mlength}`;
  }

  const newGame = { 
    title,
    maker: brand,
    type,
    price 
  };

  db.games[index] = newGame;

  return next();
}

// READ

export const getGameById = (req, res, next) => {
  const { id } = req.params;

  if (!db.games[id]) {
    return res.status(404).send('Game does not exist!');
  }

  res.locals.game = db.games[id];

  return next();
}

export const getGames = (req, res, next) => { 
  const { title, maker, type } = req.query;

  let games = db.games;

  if (title) {
    games = filterGames(games, 'title', title);
  }

  if (maker) {
    games = filterGames(games, 'maker', maker);
  }

  if (type) {
    games = filterGames(games, 'type', type);
  }

  res.locals.games = games;

  return next();
}

const filterGames = (data, field, value) => {
  const results = {};
  let length = 0;

  for (const key in data) {
    if (data[key][field].includes(value)) {
      results[length++] = data[key];
    }
  }

  return results;
}

// UPDATE

export const updateGame = (req, res, next) => {
  const { id } = req.params;
  const { title, maker, type, price } = req.body;

  if (!db.games[id]) {
    return res.status(404).send('Game does not exist!');
  }

  const newData = {
    title: title || db.games[id].title,
    maker: maker || db.games[id].maker,
    type: type || db.games[id].type,
    price: price || db.games[id].price
  }

  db.games[id] = newData;

  return next();
}

// DELETE

export const deleteGame = (req, res, next) => {
  const { id } = req.params;

  if (!db.games[id]) {
    return res.status(404).send('Game does not exist!');
  }

  delete db.games[id];

  return next();
}