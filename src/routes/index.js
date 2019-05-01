import apiRoute from './api';

const init = (app) => {
  app.get('*', function(req, res, next) {
    console.log('Request was made to: ' + req.originalUrl);
    return next();
  });

  app.use('/api', apiRoute);
};

export default init;
