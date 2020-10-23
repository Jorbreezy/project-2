import { Router } from 'express';

import { 
  createGame,
  getGames,
  getGameById,
  updateGame,
  deleteGame
} from '../controllers/games.controller';

const router = Router();

// CREATE
router.post('/games', createGame, (req, res) => {
  return res.status(200).send('Created Successfully');
});

// READ
router.get('/games', getGames, (req, res) => {
  return res.status(200).json(res.locals.games);
});

router.get('/games/:id', getGameById, (req,res) => {
  return res.status(200).json(res.locals.game);
}); 

// UPDATE
router.patch('/games/:id', updateGame, (req, res) => {
  return res.status(200).send('Update Successfully');
});

// DELETE
router.delete('/games/:id', deleteGame, (req, res) => {
  return res.status(200).send('Delete Successfully');
});

export default router;