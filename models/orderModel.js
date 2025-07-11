import * as DB from './DB.js';

export const getAll = async () => {
  const res = await DB.query('SELECT * FROM orders');
  return res.rows;
};

export const create = async ({id, restaurant_id, customer_id, order_date, status}) => {
  const res = await DB.query('INSERT INTO "orders" (id, restaurant_id, customer_id, order_date, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [id, restaurant_id, customer_id, order_date, status]
  );
  return res.rows[0];
};

export const update = async (id, status) => {
  const res = await DB.query('UPDATE "orders" SET status = $1 WHERE id = $2 RETURNING *', [status, id]);
  return res.rows[0];
};

export const remove = async (id) => {
  await DB.query('DELETE FROM "orders" WHERE id = $1', [id]);
};
