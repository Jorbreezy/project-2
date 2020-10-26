import db from '../db/db';

// CREATE

export const createGame = async (req, res, next) => {
  const { title, maker, type, price } = req.body;

  try {
    await db('games')
      .insert({ maker, price, title, type });

    return next();
  } catch (err) {
    return next(err);
  }
}

// READ

export const getGameById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const gameQuery = db
      .select('games.*', 'makers.name AS maker', 'types.name AS type')
      .from('games')
      .leftJoin('makers', 'games.maker', 'makers.id')
      .leftJoin('types', 'games.type', 'types.id')
      .where('games.id', id)
      .first();

    res.locals.game = await gameQuery;

    return next();
  } catch (err) {
    return next(err);
  }

}

export const getGames = async (req, res, next) => {
  const { title, maker, type } = req.query;

  try {
    let games = db
      .select('games.*', 'makers.name AS maker', 'types.name AS type')
      .from('games')
      .leftJoin('makers', 'games.maker', 'makers.id')
      .leftJoin('types', 'games.type', 'types.id');

    if (title) {
      games.where('games.title', 'ilike', `%${title}%`);
    }

    if (maker) {
      games.where('makers.name', 'ilike', `%${maker}%`);
    }

    if (type) {
      games.where('types.name', 'ilike', `%${type}%`);
    }

    games.orderBy('games.id');

    res.locals.games = await games;

    return next();
  } catch (err) {
    return next(err);
  }
}

// UPDATE

export const updateGame = async (req, res, next) => {
  const { id } = req.params;
  const { title, maker, type, price } = req.body;

  try {
    await db('games')
      .update({ title, maker, type, price })
      .where('id', id)

    return next();
  } catch (err) {
    return next(err);
  }
}

// DELETE

export const deleteGame = async (req, res, next) => {
  const { id } = req.params;

  try {
    await db('games')
      .del()
      .where('id', id);

    return next();
  } catch (err) {
    return next(err);
  } 
}