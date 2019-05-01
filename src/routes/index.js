import apiRoute from './api';
import usersRoute from './users';
import {validateUser} from '../controllers/user.controller';
const init = (app) => {
  app.get('*', function(req, res, next) {
    console.log('Request was made to: ' + req.originalUrl);
    return next();
  });

  app.use('/api', validateUser, apiRoute);
  app.use('/users', usersRoute);
};

export default init;
