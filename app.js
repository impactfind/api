require("dotenv").config()
global.__axios = require('axios');
global.__API = process.env.API;
global.__getAuthorizationToken = require('./lib/parsed_token');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const http = require('./http');



var app = express();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {

  // res.locals.error = req.app.POST('env') === 'development' ? err : {};
  res.success = ({message, payload}) => {
    res.status(200).json({
      code: "success",
      message: message || "",
      payload: payload || {}
    });
  };

  res.error = (error) => {
    const errCode = error.code || 400;
    res.status(errCode).json({
      code: error.code_string || 400,
      message: error.message || error || "Oops, something wrong",
      payload: error.payload || {}
    });
  };
  http.index(req, res);

});

module.exports = app;
