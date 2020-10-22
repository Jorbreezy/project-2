const db = {
    games: [],
    makers: []
};

// CREATE

export const createGame = (req, res, next) => {
  const { title, maker, type, price } = req.body;

  if (!db.makers.includes(maker)) {
    db.makers.push(maker);
  }

  for(const element of db.games){
    if (element.title === title) {
      return res.status(400).send('Game already exists!');
    }
  }

  const newGame = { title, maker, type, price };

  db.games.push(newGame);

  return next();
}

// READ

export const getGameById = (req, res, next) => {
  const { id } = req.params;

  if (!db.games.indexOf(id)) {
    return res.status(400).send('Game does not exist!');
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

const filterGames = (data, filter, value) => {
  return data.filter((element) => element[filter] === value);
}

export const getMakers = (req, res, next) => {
  res.locals.makers = db.makers;

  return next();
}

// UPDATE

export const updateGame = (req, res, next) => {
  const { id } = req.params;
  const { title, maker, type, price } = req.body;

  if (!db.games.indexOf(id)) {
    return res.status(400).send('Game does not exist!');
  }

  const newData = db.games.map((data, idx) => {  
    if (idx == id) {
      return { ...data, title: title || data.title, maker: maker || data.maker, type: type || data.type, price: price || data.price };
    }

    return data;
  });

  db.games = newData;

  return next();
}

// DELETE

export const deleteGame = (req, res, next) => {
  const { id } = req.params;

  if (!db.games.indexOf(id)) {
    return res.status(400).send('Game does not exist!');
  }

  db.games.splice(id, 1);

  return next();
}