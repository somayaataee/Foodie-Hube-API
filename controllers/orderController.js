import * as orderModel from '../models/orderModel.js';

export const getAll = async (req, res) => {
  const order = await orderModel.getAll();
  res.json(order);
};

export const getByCustomer = async (req, res) => {
  const { customer_id } = req.params;
  const order = await orderModel.getByCustomer(customer_id);
  res.json(order);
};

export const getByRestaurant = async (req, res) => {
  const { restaurant_id } = req.params;
  const order = await orderModel.getByRestaurant(restaurant_id);
  res.json(order);
};

export const create = async (req, res) => {
  const order = await orderModel.create(req.body);
  res.status(201).json(order);
};

export const update = async (req, res) => {
  const { id } = req.params;
  const order = await orderModel.update(id, req.body);
  res.json(order);
};

export const remove = async (req, res) => {
  const { id } = req.params;
  await orderModel.remove(id);
  res.status(204).send();
};
