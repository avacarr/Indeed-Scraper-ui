
var express = require('express');
var router = express.Router();
const passport = require('passport');
var loggedIn
  
router.get('/google/login', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/login/callback', passport.authenticate('google', {
    successRedirect : '/auth/login/success', 
    failureRedirect : '/auth/login/failed'
}));

router.put('/google/logout', function(req, res){
  req.logout(function(err) {
    if (err) { return next(err); }
  }) 
  res.json()
})

router.put('/login/check', (req, res) => {
  res.json(loggedIn)
})

router.get('/login/success', async (req, res) => {
  if (req.user) {
    loggedIn = req.user;
    console.log("USER LOGGED IN")
  }
  res.send("<script>window.close();</script > ")
})

router.get('/login/failed', (req, res) => {req.logout()})


module.exports = router;