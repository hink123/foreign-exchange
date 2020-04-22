const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var favoriteSchema = new Schema({
    curr1: {
        type: String,
    },
    curr2: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Favorite', favoriteSchema);