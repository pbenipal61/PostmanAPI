const apiRoute = require('./api');
const usersRoute = require( './users');
const {validateUser} = require('../controllers/user.controller');
const init = (app) => {
  app.get('*', function(req, res, next) {
    console.log('Request was made to: ' + req.originalUrl);
    return next();
  });

  app.use('/api', validateUser, apiRoute);
  app.use('/users', usersRoute);
};

module.exports = init;
