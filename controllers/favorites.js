const User = require('../models/user');

module.exports = {
    create,
    deleteOne
}

async function create(req, res) {
    const user = await User.findOne({"_id": req.user._id});
    user.favorites.push(req.body);
    user.save();
    res.status(200).json(user);
}

async function deleteOne(req, res) {
    let idx = req.params.id;
    const user = await User.findOne({"_id": req.user._id});
    user.favorites[idx].remove();
    user.save();
    res.status(200).json(user);
}
