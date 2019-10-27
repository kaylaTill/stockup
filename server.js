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
const userBalance = require('./models/userBalance.js')
const userstock = require('./models/userStock.js')
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
        .then(() => {
            User.User.findOne({
                where: { username: req.body.username }
            })
            .then((result) => {
                userBalance.UserBalance.create({ 
                    user_balance: 5000,
                    user_id: result.id
                })
            })
            .then((res) => console.log('----- Created a balance Table for User-----'))
        })
        .then((res) => {
            res.sendStatus(200)
        })
        .catch((err) => {
            console.log(`Err: ${err}`);
        });
    })
});



app.post('/login', function (req, res, next) {
    User.User.findOne({
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




app.post('/buyStock', (req, res, next) => {
    // add records to userstock
    User.User.findOne({ where: { username: req.session.user.username} })
    .then((results) => {
        console.log('-----Found User-----');
        const userId = results.id
        userstock.UserStock.create({
            symbol: req.body.symbol,
            companyName: req.body.companyName,
            price: req.body.price,
            shares: req.body.shares,
            user_id: userId
        })

        .then((res) => {
            const balance = userBalance.UserBalance.user_balance;
            console.log('-----User Stock Added-----');
            userBalance.UserBalance.update(
                {user_balance: balance - req.body.total},
                { where: { user_id: userId } }
            )
        })
        .then(() => {
            console.log('-----User Balance Updated-----');
        })
    })
    .then((res) => {
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log(err)
    })

})

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});



const port = process.env.PORT || 5000;
app.listen(port);

console.log('Server listening on port ' + port);