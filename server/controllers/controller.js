const db = {
    games: [],
    makers: []
};

// CREATE

export const createGame = (req, res, next) => {
  const { title, maker, type, price } = req.body;

  const newGame = { title, maker, type, price };

  if (!db.makers.includes(maker)) {
    db.makers.push(maker);
  }

  db.games.push(newGame);

  return next();
}

// READ

export const getGames = (req, res, next) => { 
  res.locals.games = db.games;

  return next();
}

// UPDATE

export const updateGame = (req, res, next) => {
  const { id } = req.params;
  const { name, maker, type, price } = req.body;

  const newData = db.games.map((data, idx) => {
    if (idx === id) {
      return { ...data, name, maker, type, price };
    }

    return data;
  });

  db.games = newData;

  return next();
}

// DELETE

export const deleteGame = (req, res, next) => {
  const { id } = req.params;

  db.games.splice(id, 1);

  return next();
}