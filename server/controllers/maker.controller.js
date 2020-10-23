import db from '../db/db';

// CREATE

export const makerExists = (name) => {
  for (const key in db.makers) {
    if (db.makers[key] === name) {
      return true;
    }
  }

  return false;
};


export const createMaker = (req, res, next) => {
  const { name } = req.body;

  const index = Object.keys(db.makers).length;

  if (makerExists(name)) {
    return res.status(406).send('Maker already exists!');
  } 
 
  db.makers[index] = newMaker;

  return next();
}

// READ
export const getMakers = (req, res, next) => {
  res.locals.makers = db.makers;

  return next();
}


// UPDATE
export const updateMaker = (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  db.makers[id] = { name };

  return next();
} 


// DELETE
export const deleteMaker = (req, res, next) => {
  const { id } = req.params;

  delete db.makers[id];

  return next();
}



