const apiRoute = require('./api');
const usersRoute = require( './users');
const webRoute = require('./web');
const {validateUser} = require('../controllers/user.controller');
const init = (app) => {
  app.get('*', function(req, res, next) {
    console.log('Request was made to: ' + req.originalUrl);
    return next();
  });

  app.use('/api', validateUser, apiRoute);
  app.use('/users', usersRoute);
  app.use('/web', webRoute);
};

module.exports = init;
