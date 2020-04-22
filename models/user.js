const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 6;

var Schema = mongoose.Schema;

// var favoriteSchema = new Schema({
//     curr1: {
//         type: String,
//     },
//     curr2: {
//         type: String,
//     }
// }, {
//     timestamps: true
// });

const userSchema = new Schema ({
    name: String,
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: String,
    // favorites: [favoriteSchema]
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

userSchema.methods.comparePassword = function(tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb);
}

module.exports = mongoose.model('User', userSchema);