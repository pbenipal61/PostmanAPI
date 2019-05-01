const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


import routes from './routes';

mongoose
    .connect(
        'mongodb+srv://root:yFFqsF4R5CkZwSjc@quiz-t7evv.mongodb.net/Postman?retryWrites=true',
        {useNewUrlParser: true}
    )
    .then((res) => {
      console.log('MongoDB connected...');
    })
    .catch((err) => {
      console.log('MongoDB failed to connect!', err);
    });
mongoose.set('useFindAndModify', false);


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

routes(app);

module.exports = app;
