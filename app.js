import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import restaurantRoute from './routes/restaurantRoutes.js';
import customerRoute from './routes/customerRoutes.js';
import menuRoute from './routes/menuRoutes.js';
import orderRoute from './routes/orderRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/restaurant', restaurantRoute);
app.use('/menu', menuRoute);
app.use('/order', orderRoute);
app.use('/customer', customerRoute);


app.listen(PORT, () => {
  console.log(`✅ server is running on port ${PORT}`);
});
