'use strict';

import {
  createMoodService,
  getAllMoodsService,
  getMoodsbyDateService,
  searchMoodsService,
  getMoodByIdService,
  updateMoodService,
  deleteMoodService,
} from './moods.service.js';

// 📌 CREATE

export const createMoodController = async (req, res) => {
  try {
    const { type, text, date, time } = req.body;

    const mood = await createMoodService(Number(type), text, date, time);

    res.status(201).send({ message: 'created', mood: mood });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 GET ALL

export const getAllMoodsController = async (req, res) => {
  try {
    const moods = await getAllMoodsService();

    res.send({ moods: moods });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 GET BY DATE

export const getMoodsByDateController = async (req, res) => {
  try {
    const { year, month, day } = req.query;

    if (!year || !month || !day || year.length !== 4 || month.length !== 2 || day.length !== 2) {
      return res.status(400).send({ message: 'bad request' });
    }

    const date = `${year}-${month}-${day}`;
    const moods = await getMoodsbyDateService(date);

    res.send({ moods: moods });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 GET TODAY

export const getTodayMoodsController = async (req, res) => {
  try {
    const today = new Date();

    const year = today.getFullYear().toString().padStart(4, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    const moods = await getMoodsbyDateService(`${year}-${month}-${day}`);

    res.send({ moods: moods });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 SEARCH

export const searchMoodsController = async (req, res) => {
  try {
    const query = req.query.text;
    const moods = await searchMoodsService(query);

    res.send({ moods: moods });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 GET BY ID

export const getMoodByIdController = async (req, res) => {
  try {
    const idParam = req.params.id;

    const mood = await getMoodByIdService(idParam);

    if (!mood) {
      return res.status(404).send({ message: 'not found' });
    }

    res.send({ mood: mood });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 UPDATE

export const updateMoodController = async (req, res) => {
  try {
    const idParam = req.params.id;
    const body = req.body;

    const moodById = await getMoodByIdService(idParam);

    if (!moodById) {
      return res.status(404).send({ message: 'not found' });
    }

    const mood = await updateMoodService(idParam, body);

    res.send({ message: 'updated', mood: mood });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 DELETE

export const deleteMoodController = async (req, res) => {
  try {
    const idParam = req.params.id;

    const moodById = await getMoodByIdService(idParam);

    if (!moodById) {
      return res.status(404).send({ message: 'not found' });
    }

    await deleteMoodService(idParam);

    res.send({ message: 'deleted' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
