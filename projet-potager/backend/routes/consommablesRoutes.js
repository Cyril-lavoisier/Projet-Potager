import express from 'express';
import {
  getAllConsommables,
  createConsommables,
  updateConsommables,
  deleteConsommables,
} from '../controllers/consommablesControllers.js';

const router = express.Router();

router.get('/', getAllConsommables);
router.post('/', createConsommables);
router.put('/', updateConsommables);
router.delete('/', deleteConsommables);

export default router;