var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { sequelize } = require('./db');
var PORT = 3001;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var accountsRouter = require('./routes/accounts');
var savingsAccountsRouter = require('./routes/savingsAccounts');
var cooperative = require('./routes/cooperatives')
var login = require('./routes/auth');
var userState = require('./routes/userState');
var admin = require('./routes/administratorRouter');
var credit = require('./routes/creditRoutes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//!rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/accounts', accountsRouter);
app.use('/savings', savingsAccountsRouter);
app.use('/admin', admin);
app.use('/cooperatives', cooperative);
app.use('/state', userState);
app.use('/credit', credit)
app.use('/cooperatives', cooperative)
app.use('/login', login)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, ()=>{
  sequelize.sync({force: false});
  console.log(`server activo en http://localhost:${PORT}`)
})

module.exports = app;
