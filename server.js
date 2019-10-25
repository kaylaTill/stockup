const express = require('express');
const path = require('path');
const app = express();
const bcrypt = require('bcrypt');
var session = require('express-session');
var request = require('request');
var bodyParser = require('body-parser');
var logger = require('morgan');
const Sequelize = require('sequelize');
const User = require('./models/users.js');
const secret = '_my_Secret_String_2464582';
const saltRounds = 10;


// Serve the static files from React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
    secret: secret,
    saveUninitialized: true,
    resave: false,
    cookie: {
        maxAge: 86400000
    }
}));


app.post('/registerUser', function (req, res, next) {
    console.log(req.body)
    User.User.findAll({
        where: { username: req.body.username }
    })
        .then((results) => {
            if (results.length == 0) {
                bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
                    User.User.create({
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        username: req.body.username,
                        password: hash
                    })
                        .then((user) => {
                            req.session.user = user;
                            
                            req.session.save((err) => {
                                if (err) {
                                    console.log(err);
                                }
                                res.sendStatus(200);
                            })
                            console.log('------ Succesful session created for new user!------');
                        })
                        .catch(function (err) {
                            console.log(`Hash Error: ${err}`);
                        })
                });
            } else {
                console.log('-------–Invalid Registration-------');
                res.sendStatus(401);
            }
        })
        .catch((err) => {
            console.log(err);
        });
});



app.post('/login', function (req, res, next) {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then((user) => {
            if (!user) {
                res.sendStatus(401);
                console.log("-----Sorry, couldn't find a user under that username!-----");
            } else {
                //compare username and user password
                bcrypt.compare(req.body.password, user.password, function (err, result) {
                    if (result == true) {
                        //store cookies for user login
                        req.session.user = user;
                        req.session.save((err) => {
                            if (err) {
                                console.log(err);
                            }
                            res.send('Logged In');
                        });
                    } else {
                        res.sendStatus(401);
                        console.log('------Incorrect password, Please try again!----');
                    }
                });
            }
        });
});

// testing cookie connection
app.get('/loggedIn', function (req, res, next) {
    if (req.session.user) {
        console.log(`-------  Succesful session for ${req.session.user} ------`);
        return res.sendStatus(200);
    } 
    console.log(req.session.user);
    res.sendStatus(404);
});

// log out user 
app.get('/logout', (req, res, next) => {
    req.session.destroy((success, err) => {
        if (err) {
            return res.sendStatus(404)
        }
    })
    return res.sendStatus(200);
})

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});



const port = process.env.PORT || 5000;
app.listen(port);

console.log('Server listening on port ' + port);