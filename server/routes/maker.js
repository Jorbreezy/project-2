import { Router } from 'express';

import validateTypes from '../controllers/validateTypes';

import { 
  createMaker,
  getMakers,
  getMakerById,
  updateMaker,
  deleteMaker
} from '../controllers/maker.controller';

const router = Router();

// CREATE
router.post('/makers', validateTypes, createMaker, (req, res) => {
  return res.status(200).send('Created Successfully');
});

// READ
router.get('/makers', getMakers, (req, res) => {
  return res.status(200).json(res.locals.makers);
});

router.get('/makers/:id', getMakerById, (req, res) => {
  return res.status(200).json(res.locals.maker);
}); 

// UPDATE
router.patch('/makers/:id', validateTypes, updateMaker, (req, res) => {
  return res.status(200).send('Update Successful');
});

// DELETE
router.delete('/makers/:id', deleteMaker, (req, res) => {
  return res.status(200).send('Delete Successful');
});


export default router;