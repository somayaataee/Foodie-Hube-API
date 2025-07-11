import * as DB from './DB.js';

export const getAll = async () => {
  const res = await DB.query('SELECT * FROM customers');
  return res.rows;
};

export const create = async (name, phone) => {
  const res = await DB.query(
    'INSERT INTO customers(name, phone) VALUES ($1, $2) RETURNING *',
    [name, phone]
  );
  return res.rows[0];
};

export const update = async (id, name, phone) => {
  const res = await DB.query(
    'UPDATE customers SET name = $1, phone = $2 WHERE id = $3 RETURNING *',
    [name, phone, id]
  );
  return res.rows[0];
};

export const remove = async (id) => {
  await DB.query('DELETE FROM customers WHERE id = $1', [id]);
};
