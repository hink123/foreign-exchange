const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 6;

var Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: String,
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: String
}, {
    timestamps: true
})

userSchema.pre('save', function(next) {
    const user = this;
    if(!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
        user.password = hash;
        next();
    });
})

module.exports = mongoose.model('User', userSchema);