import * as DB from './DB.js';

export const getAll = async () => {
  const res = await DB.query('SELECT * FROM restaurants');
  return res.rows;
};

export const create = async (name, address) => {
  const res = await DB.query('INSERT INTO restaurants (name, address) VALUES ($1, $2) RETURNING *',[name, address]);
  return res.rows[0];
};

export const update = async (id, name, address) => {
  const res = await DB.query('UPDATE restaurants SET name = $1, address = $2 WHERE id = $3 RETURNING *', [name, address, id]);
  return res.rows[0];
};

export const remove = async (id) => {
  await DB.query('DELETE FROM restaurants WHERE id = $1', [id]);
};
