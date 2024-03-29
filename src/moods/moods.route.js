'use strict';

import express from 'express';
const router = express.Router();

import {
  createMoodController,
  getAllMoodsController,
  getMoodsByDateController,
  getTodayMoodsController,
  searchMoodsController,
  getMoodByIdController,
  updateMoodController,
  deleteMoodController,
} from './moods.controller.js';

import { validMoodId, validMoodBody } from './moods.middleware.js';

router.post('/', validMoodBody, createMoodController);
router.get('/', getAllMoodsController);
router.get('/date/today', getTodayMoodsController);
router.get('/date', getMoodsByDateController);
router.get('/search', searchMoodsController);
router.get('/id/:id', validMoodId, getMoodByIdController);
router.put('/update/:id', validMoodId, validMoodBody, updateMoodController);
router.delete('/delete/:id', validMoodId, deleteMoodController);

export default router;
