import express from 'express';
import * as menuController from '../controllers/menuController.js';

const router = express.Router();

router.get('/restaurant/:restaurantId', menuController.getAll);
router.post('/', menuController.create);
router.put('/:id', menuController.update);
router.delete('/:id', menuController.remove);

export default router;
