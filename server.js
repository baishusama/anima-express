// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Get API routes
const api = require('./server/routes/api');

const app = express();

// Uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(cookieParser());
// Point static path to dist/
app.use(express.static(path.join(__dirname, 'dist')));

// Set api routes
app.use('/api', api);

// Caught all other routes and return the index file
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
});

/**
 * Get port from environment
 */
const port = process.env.PORT || 3000;
app.set('port', port);

/**
 * Create HTTP server
 */
// const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces
 */
app.listen(port, () => {
  console.log(`API running on localhost:${port}`);
});

/*// catch 404 and forward to error handler
 app.use(function(req, res, next) {
 var err = new Error('Not Found');
 err.status = 404;
 next(err);
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

 module.exports = app;*/
