// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// Get API routes
const api = require('./server/routes/api');

const app = express();

// Uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); // TODO: false || true ?
// app.use(cookieParser());
// Point static path to dist/
app.use(express.static(path.join(__dirname, 'dist')));
app.use(morgan('dev'));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
    next(); // TODO: what ?
});

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

const User = require('./server/models/User');

// Connect to DB
const mongoUrl = process.env.MONGO_URL || 'http://127.0.0.1:27017';
console.log('mongoUrl :', mongoUrl);
mongoose.connect(mongoUrl);

app.post('/api/authenticate', function (req, res) {
    User.findOne({email: req.body.email, password: req.body.password}, function (err, user) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            if (user) {
                res.json({
                    type: true,
                    data: user,
                    token: user.token
                });
            } else {
                res.json({
                    type: false,
                    data: "Incorrect email/password!"
                });
            }
        }
    });
});

app.post('/api/signin', function (req, res) {
    User.findOne({email: req.body.email, password: req.body.password}, function (err, user) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            if (user) {
                res.json({
                    type: false,
                    data: "User already exists!"
                });
            } else {
                let userModel = new User();
                userModel.email = req.body.email;
                userModel.password = req.body.password;
                userModel.save(function (err, user) {
                    user.token = jwt.sign(user, process.env.JWT_SECRET);
                    user.save(function (err, user1) {
                        res.json({
                            type: true,
                            data: user1,
                            token: user1.token
                        });
                    });
                });
            }
        }
    })
});

app.get('/api/me', ensureAuthorized, function (req, res) {
    User.findOne({token: req.token}, function (err, user) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            res.json({
                type: true,
                data: user
            });
        }
    });
});

function ensureAuthorized(req, res, next) {
    let bearerToken;
    let bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        let bearer = bearerHeader.split(" ");
        bearerToken = bearer[1]; // TODO: 稳？
        req.token = bearerToken;
        next(); // TODO: 通过调用 next() 函数，请求继续……
    } else {
        res.send(403);
    }
}

process.on('uncaughtException', function (err) {
    console.log(err);
});

/**
 * Create HTTP server
 */
// const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces
 */
app.listen(port, () => {
    console.log(`Express server listening on port ${port} ~`);
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
