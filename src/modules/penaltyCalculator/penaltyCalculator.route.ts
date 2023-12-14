import { Router } from 'express';
import * as penaltyCalculatorController from './penaltyCalculator.controller';

const router = Router();

router.get('/', (_req, res) => res.send('Welcome to Penalty Calculator Service'));
router.post('/:reservation_id', penaltyCalculatorController.getOverstayFee);

export default router;
