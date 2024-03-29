'use strict';

import Mood from './Mood.js';

export const createMoodService = (type, text, date, time) => {
  return Mood.create({ type, text, date, time });
};

export const getAllMoodsService = () => {
  return Mood.find().sort([
    ['date', -1],
    ['time', -1],
  ]);
};

export const getMoodsbyDateService = (date) => {
  return Mood.find({ date: date }).sort([
    ['date', -1],
    ['time', -1],
  ]);
};

export const searchMoodsService = (query) => {
  return Mood.find({ text: { $regex: `${query || ''}`, $options: 'i' } }); // .sort({ dateTime: -1 });
};

export const getMoodByIdService = (id) => {
  return Mood.findById(id);
};

export const updateMoodService = (id, body) => {
  return Mood.findByIdAndUpdate(id, body).setOptions({ returnOriginal: false });
};

export const deleteMoodService = (id) => {
  return Mood.findByIdAndDelete(id);
};
