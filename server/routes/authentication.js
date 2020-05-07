'use strict';
const { Router } = require('express');
const passport = require('passport');
require('./../passport-configuration.js');

const router = new Router();

router.post(
  '/sign-up',
  passport.authenticate('local-sign-up', {
    successRedirect: '/private',
    failureRedirect: '/sign-up',
  })
);

router.post(
  '/sign-in',
  passport.authenticate('local-sign-in', {
    successRedirect: '/private',
    failureRedirect: '/sign-in',
  })
);

router.post('/sign-out', (req, res, next) => {
  req.logout();
  res.json({});
});

router.get('/user-information', (req, res, next) => {
  res.json({ user: req.user || null });
});

// router.post(
//   '/sign-up',
//   passport.authenticate('github', {
//     successRedirect: '/private',
//     failureRedirect: '/sign-up'
//   })
// );

// router.get(
//   '/github',
//   passport.authenticate('github', {
//     successRedirect: '/private',
//     failureRedirect: '/authentication/sign-in'
//   })
// );

// router.get(
//   '/github-callback',
//   passport.authenticate('github', {
//     successRedirect: '/private',
//     failureRedirect: '/authentication/sign-in'
//   })
// );

module.exports = router;
