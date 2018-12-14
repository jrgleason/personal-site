var express = require('express');
var path = require('path');
var passport     = require('passport'),
    LdapStrategy = require('passport-ldapauth');

var OPTS = {
  server: {
    // Example ldap://localhost:10389
    url: process.env.LDAP_URL,
    bindDn: 'uid=admin,ou=system',
    bindCredentials: process.env.LDAP_SECRET,
    searchBase: 'ou=system',
    searchFilter: '(uid={{username}})'
  }
};

passport.use(new LdapStrategy(OPTS));
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(require('express-session')({secret: 'mySecretKey'}));
passport.use(new LdapStrategy(OPTS));


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(cookieParser());
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

var routes = require('./routes/index');
var users = require('./routes/users');
app.use('/javascripts', express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
app.listen(3000);
