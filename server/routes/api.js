import { Router } from 'express';

import { createGame, getGames, updateGame, deleteGame } from '../controllers/controller';

const router = Router();

// CREATE
router.post('/createGame', createGame, (req, res) => {
  return res.status(200).send('Created Successfully');
});

// READ
router.get('/', getGames, (req, res) => {
  return res.status(200).json(res.locals.games);
});

// UPDATE
router.patch('/:id', updateGame, (req, res) => {
  return res.status(200).send('Update Successfully');
});

// DELETE
router.delete('/:id', deleteGame, (req, res) => {
  return res.status(200).send('Delete Successfully');
});

export default router;