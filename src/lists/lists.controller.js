import {
  createListService,
  deleteListService,
  getAllListsService,
  getListByIdService,
  updateListService,
} from './lists.service.js';

// 📌 CREATE

export const createListController = async (req, res) => {
  try {
    const { name, icon } = req.body;
    const list = await createListService(name, icon);

    res.status(201).send({ message: 'created', list: list });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 GET ALL

export const getAllListsController = async (req, res) => {
  try {
    const lists = await getAllListsService();

    res.send({ lists: lists });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 GET BY ID

export const getListByIdController = async (req, res) => {
  try {
    const idParam = req.params.id;

    const list = await getListByIdService(idParam);

    res.send({ list: list });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 UPDATE

export const updateListController = async (req, res) => {
  try {
    const idParam = req.params.id;
    const body = req.body;

    const list = await updateListService(idParam, body);

    res.send({ message: 'updated', list: list });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 DELETE

export const deleteListController = async (req, res) => {
  try {
    const idParam = req.params.id;
    await deleteListService(idParam);

    res.send({ message: 'deleted' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};