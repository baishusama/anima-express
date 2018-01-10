const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    token: String
});

const User = mongoose.model('User', UserSchema); // TODO: better const ?

module.exports = User;
