import { Router } from 'express';

import {
  createMaker,
  getMakers,
  getMakerById,
  updateMaker,
  deleteMaker,
} from '../controllers/maker.controller';

const router = Router();

// CREATE
router.post('/makers', createMaker, (req, res) => res.status(201).send('Created Successfully'));

// READ
router.get('/makers', getMakers, (req, res) => res.status(200).json(res.locals.makers));

router.get('/makers/:id', getMakerById, (req, res) => res.status(200).json(res.locals.maker));

// UPDATE
router.patch('/makers/:id', updateMaker, (req, res) => res.status(200).send('Update Successful'));

// DELETE
router.delete('/makers/:id', deleteMaker, (req, res) => res.status(204).send('Delete Successful'));

export default router;
