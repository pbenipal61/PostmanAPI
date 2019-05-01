const express = require('express');
const router = new express.Router();

import {getEvents, getEventById, postEvent} from '../../../controllers/EventController';
// console.log(EventController);
router.get('/', getEvents);
router.get('/:id', getEventById);
router.post('/', postEvent);

export default router;
