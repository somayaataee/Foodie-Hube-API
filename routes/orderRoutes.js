import express from 'express';
import * as orderController from '../controllers/orderController.js';

const router = express.Router();

router.get('/', orderController.getAll);
router.get('/customer/:customer_id', orderController.getByCustomer);
router.get('/restaurant/:restaurant_id', orderController.getByRestaurant);
router.post('/', orderController.create);
router.put('/:id', orderController.update);
router.delete('/:id', orderController.remove);

export default router;
