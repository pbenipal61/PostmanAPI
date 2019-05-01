const express = require('express');
const router = new express.Router();

import eventsRoute from './events';

router.use('/events', eventsRoute);

export default router;
