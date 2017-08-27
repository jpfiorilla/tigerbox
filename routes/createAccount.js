const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { User } = require('./schema');

router.post('/create-account', (req, res, next) => {
    console.log('hit api/create-account with', req.body)
    // let { firstName, lastName, email, password } = req.body;

    let user = new User(req.body);

    user.save(function(err, user) {
        if (err) {
        console.log(err);
            return res.status(500).json({
                success: false,
                message: 'Could not save user'
            });
        }
        res.json({ success: true, userData: user });
    });

    // res.json(req.body);
})

module.exports = router;