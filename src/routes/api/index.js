const express = require('express');
const router = new express.Router();

const eventsRoute = require('./events');

router.use('/events', eventsRoute);

module.exports = router;
