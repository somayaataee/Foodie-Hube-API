import * as restaurantModel from '../models/restaurantModel.js';

export const getAll = async (req, res) => {
  const restaurant = await restaurantModel.getAll();
  res.json(restaurant);
};

export const create = async (req, res) => {
  const { name, address } = req.body;
  const restaurant = await restaurantModel.create(name, address);
  res.status(201).json(restaurant);
};

export const update = async (req, res) => {
  const { name, address } = req.body;
  const { id } = req.params;
  const restaurant = await restaurantModel.update(id, name, address);
  res.json(restaurant);
};

export const deleteRestaurant = async (req, res) => {
  const { id } = req.params;
  await restaurantModel.remove(id);
  res.status(204).send();
};
