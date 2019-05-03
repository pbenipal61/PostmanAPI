const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const expressIp = require('express-ip');
require('dotenv').config();
const DB_PASS = process.env.DB_PASS || 'password';
const DB_USER = process.env.DB_USER || 'root';
const DB = process.env.DB || 'Postman';
const routes = require('./routes');


require('dotenv').config();

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASS}@quiz-t7evv.mongodb.net/${DB}?retryWrites=true`,
        {useNewUrlParser: true}
    )
    .then((res) => {
      console.log('MongoDB connected...');
    })
    .catch((err) => {
      console.log('MongoDB failed to connect!', err);
    });
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(expressIp().getIpInfoMiddleware);

routes(app);

module.exports = app;
