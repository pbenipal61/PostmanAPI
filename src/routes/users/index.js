const express = require('express');
const router = new express.Router();

const {register, login}
  = require('../../controllers/user.controller');
// console.log(EventController);
router.post('/register', register);
router.post('/login', login);


module.exports = router;
