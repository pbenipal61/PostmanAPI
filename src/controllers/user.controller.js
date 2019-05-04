const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const secret = process.env.SECRET_KEY || 'secretKey';


const register = (req, res, next) => {
  const {firstName, lastName, email, password, language,
    city, country, continent} = req.body;
  User.create({
    firstName, lastName, email, password, language, city, country, continent,
  }, (err, result) => {
    if (err) {
      next(err);
    } else {
      const token = jwt.sign({id: result._id},
          secret,
          {expiresIn: '365d'}
      );
      res.status(200).json({token});
    }
  });
};


const login = (req, res, next) => {
  User.findOne({email: req.body.email}, (err, user) => {
    if (err) {
      next(err);
    } else {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign({id: user._id},
            secret,
            {expiresIn: '365d'} );
        res.status(200).json({user, token});
      } else {
        res.status(200).json('Invalid email or password');
      }
    }
  });
};

const validateUser = (req, res, next) => {
  if (req.headers['x-access-token']) {
    jwt.verify(req.headers['x-access-token'],
        secret,
        (err, decoded) => {
          if (err) {
            res.json({message: err.message});
          } else {
          // add user id to request
            req.body.userId = decoded.id;
            next();
          }
        });
  } else {
    res.status(400).json('Unauthenticated!');
  }
};

const locale = (req, res, next) => {
  const ipInfo = req.ipInfo;
  res.status(200).send(ipInfo);
};
module.exports = {register, login, validateUser, locale};
