var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res ) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res ){
  res.render("login");
});
router.get('/success', passport.authenticate('ldapauth', { failureRedirect: '/login' }), function(req, res){
  res.render("success");
});
router.post('/login', function(req, res, next){
  passport.authenticate('ldapauth', { }, function(err, user, info) {
    if (err) { return next(err); }
    res.setHeader('Content-Type', 'application/json');
    console.log(JSON.stringify(req.session));
    if (!user) {
      res.send(JSON.stringify({
        "auth": false,
      }));
    }
    else{
      res.send(JSON.stringify({
        "auth": true,
        "user": user,
      }));
    }
  })(req, res, next);
});

module.exports = router;
