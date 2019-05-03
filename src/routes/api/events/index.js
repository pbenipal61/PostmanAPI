const express = require('express');
const router = new express.Router();

const {getEvents, getEventById, postEvent}
    = require('../../../controllers/event.controller');
// console.log(EventController);
router.get('/', getEvents);
router.get('/:id', getEventById);
router.post('/', postEvent);

module.exports = router;
