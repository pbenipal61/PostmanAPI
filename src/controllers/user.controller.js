import User from '../models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
require('dotenv').config();
const secret = process.env.SECRET_KEY || 'secretKey';

const register = (req, res, next) => {
  const {firstName, lastName, email, password, language,
    city, country, continent} = req.body;
  User.create({
    firstName, lastName, email, password, language, city, country, continent,
  }, (err, result) => {
    if (err) next(err);
    else res.json({message: 'Registered', user: result});
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


export {register, login, validateUser};
