const express = require('express');
const router = new express.Router();

const {register, login, locale}
  = require('../../controllers/user.controller');
// console.log(EventController);
router.post('/register', register);
router.post('/login', login);
router.get('/locale', locale);


module.exports = router;
