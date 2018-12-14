var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res ) {
  console.log("Inside core");
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res ){
  res.render("login");
});
router.get('/success', require('connect-ensure-login').ensureLoggedIn(), function(req, res){
  res.render("success");
});
router.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });
router.post('/login', passport.authenticate('ldapauth', {failureRedirect: '/#/login' }), function(req, res){
  res.redirect("/");
});
router.get('/user', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    console.log(JSON.stringify(req.session));
    if (!req.user) {
      res.send(JSON.stringify({
        "auth": false,
      }));
    }
    else{
      res.send(JSON.stringify({
        "auth": true,
        "user": req.user,
      }));
    }
});

module.exports = router;
