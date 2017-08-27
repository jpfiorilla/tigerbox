const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;

router.use(passport.initialize());
router.use(passport.session());

const { User } = require('./schema');

findByEmail = function(email, cb) {
    process.nextTick(function() {
        return User.findOne({ email })/*.select('firstName lastName email password loans')*/.exec((err, person) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Could not retrieve users' });
            }
            if (person) return cb(null, person);
            return cb(null, null);
        })
    });
}

passport.use(new Strategy({ usernameField: 'email', passwordField: 'password'},
    function(username, password, cb) {
        findByEmail(username, function(err, user) {
            if (err) { return cb(err); }
            if (!user) { return cb(null, false); }
            if (user && !(bcrypt.compareSync(password, user.password) || password == user.password)) return cb(null, false);
            return cb(null, user);
    });
}));

router.post('/login', 
    // passport.authenticate('local', (err, user, info) => {
    //     if (err) res.json({ success: false, message: 'Error logging in.' });
    //     if (!user) res.json({ success: false, message: 'Error finding user.' });
    // })(req, res, next),
    (req, res) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) return res.json({ success: false, message: 'Error logging in.' });
            if (!user) return res.json({ success: false, message: 'Error finding user.' });
            return findByEmail(req.body.email.toLowerCase(), (err, user) => {
                if (err) {
                    res.status(401).json({ success: false, message: 'Error finding user.' })
                    return console.error(err);
                }
                return res.json({ userData: user, success: true, message: 'Successfully logged in.', rememberMe: req.body.rememberMe });
            })
        })(req, res)
});

router.get('/logout', function(req, res){
    req.logout();
    res.sendStatus(200);
});

passport.serializeUser(function(user, cb) {
    cb(null, user._id);
});

passport.deserializeUser(function(id, cb) {
    users.findById(id, function (err, user) {
        if (err) { return cb(err); }
        cb(null, user);
    });
});

module.exports = router;