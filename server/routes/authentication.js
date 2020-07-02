// 'use strict';
const { Router } = require('express');
const passport = require('passport');

require('./../passport-configuration.js');
const User = require('./../models/user');
const bcryptjs = require('bcryptjs');

const router = new Router();

router.post('/sign-up', (req, res, next) => {
  const { name, email, password } = req.body;
  bcryptjs
    .hash(password, 10)
    .then((hash) => {
      return User.create({
        name,
        email,
        passwordHash: hash,
      });
    })
    .then((user) => {
      req.session.user = user._id;
      res.json({ user });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/sign-in', (req, res, next) => {
  let user;
  const { email, password } = req.body;
  User.findOne({ email })
    .then((document) => {
      if (!document) {
        return Promise.reject(new Error("There's no user with that email."));
      } else {
        user = document;
        return bcryptjs.compare(password, user.passwordHash);
      }
    })
    .then((result) => {
      if (result) {
        req.session.user = user._id;
        res.json({ user });
      } else {
        return Promise.reject(new Error('Wrong password.'));
      }
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/sign-out', (req, res, next) => {
  req.session.destroy();
  res.json({});
});

router.get('/user-information', (req, res, next) => {
  res.json({ user: req.user || null });
});

router.get(
  '/google',
  passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ],
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: 'https://plataforma-oceano.herokuapp.com/',
    failureRedirect: 'https://plataforma-oceano.herokuapp.com/signin', // here you would redirect to the login page using traditional login approach
  })
);

// FIREBASE

module.exports = router;
