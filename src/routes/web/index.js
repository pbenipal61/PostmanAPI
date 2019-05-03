const express = require('express');
const router = new express.Router();


router.get('/check', (req, res, next) => {
  res.status(200).json('running...');
});


module.exports = router;
