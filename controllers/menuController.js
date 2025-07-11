import * as menuModel from '../models/menuModel.js';

export const getAll = async (req, res) => {
  const { restaurantId } = req.params;
  const result = await menuModel.getAll(restaurantId);
  res.json(result);
};

export const create = async (req, res) => {
  const result = await menuModel.create(req.body);
  res.status(201).json(result);
};

export const update = async (req, res) => {
  const { id } = req.params;
  const result = await menuModel.update(id, req.body);
  res.json(result);
};

export const remove = async (req, res) => {
  const { id } = req.params;
  await menuModel.remove(id);
  res.status(204).send();
};
