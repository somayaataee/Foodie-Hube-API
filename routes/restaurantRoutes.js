import express from 'express';
import * as restaurantController from '../controllers/restaurantController.js';

const router = express.Router();

router.get('/', restaurantController.getAll);
router.post('/', restaurantController.create);
router.put('/:id', restaurantController.update);
router.delete('/:id', restaurantController.deleteRestaurant);

export default router;
