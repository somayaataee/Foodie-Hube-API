import * as customerModel from '../models/customerModel.js';

export const getAll = async (req, res) => {
  const customer = await customerModel.getAll();
  res.json(customer);
};

export const create = async (req, res) => {
  const { name, phone } = req.body;
  const customer = await customerModel.create(name, phone);
  res.status(201).json(customer);
};

export const update = async (req, res) => {
  const { id } = req.params;
  const { name, phone } = req.body; 
  const customer = await customerModel.update(id, name, phone);
  res.status(200).json(customer);
};

export const remove = async (req, res) => {
  const { id } = req.params;
  await customerModel.remove(id);
  res.status(204).send();
};
