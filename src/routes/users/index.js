const express = require('express');
const router = new express.Router();

import {register, login}
  from '../../controllers/user.controller';
// console.log(EventController);
router.post('/register', register);
router.post('/login', login);


export default router;
