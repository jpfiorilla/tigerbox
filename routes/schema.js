const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    loans: Array,
    surveyData: Object,
    admin: Boolean // remove?
});

const User = mongoose.model('users', userSchema);

module.exports = {
    User
}