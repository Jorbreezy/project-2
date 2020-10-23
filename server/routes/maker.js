import { Router } from 'express';

import { 
  createMaker,
  getMakers,
  updateMaker,
  deleteMaker
} from '../controllers/maker.controller';

const router = Router();

// CREATE
router.post('/makers', createMaker, (req, res) => {
  return res.status(200).send('Created Successfully');
});

// READ
router.get('/makers', getMakers, (req, res) => {
  return res.status(200).json(res.locals.makers);
});

//router.get('/games/:id', getGameById, (req,res) => {
//  return res.status(200).json(res.locals.game);
//}); 

// UPDATE
router.patch('/makers/:id', updateMaker, (req, res) => {
  return res.status(200).send('Update Successfully');
});

// DELETE
router.delete('/makers/:id', deleteMaker, (req, res) => {
  return res.status(200).send('Delete Successfully');
});


export default router;