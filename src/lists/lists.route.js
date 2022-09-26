import express from 'express';
const router = express.Router();

import {
  createListController,
  deleteListController,
  getAllListsController,
  getListByIdController,
  updateListController,
} from './lists.controller.js';

router.post('/', createListController);
router.get('/', getAllListsController);
router.get('/id/:id', getListByIdController);
router.patch('/update/:id', updateListController);
router.delete('/delete/:id', deleteListController);

export default router;