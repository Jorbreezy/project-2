import { Router } from 'express';

import {
  createGame,
  getGameById,
  getGames,
  updateGame,
  deleteGame,
} from '../controllers/games.controller';

const router = Router();

// CREATE
router.post('/games', createGame, (req, res) => res.status(201).send('Created Successfully'));

// READ
router.get('/games', getGames, (req, res) => res.status(200).json(res.locals.games));

router.get('/games/:id', getGameById, (req, res) => res.status(200).json(res.locals.game));

// UPDATE
router.patch('/games/:id', updateGame, (req, res) => res.status(200).send('Update Successful'));

// DELETE
router.delete('/games/:id', deleteGame, (req, res) => res.status(204).send('Delete Successful'));

export default router;
