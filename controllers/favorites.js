const User = require('../models/user');
const Favorite = require('../models/favorite');

module.exports = {
    create,
    deleteOne, 
    index
}

async function create(req, res) {
    try {
        req.body.user = req.user._id;
        console.log('REQ.BODY', req.body);
        let favorite = new Favorite(req.body);
        await favorite.save();
        res.status(200).json(favorite);
        // const user = await User.findOne({"_id": req.user._id});
        // user.favorites.push(req.body);
        // user.save();
        // res.status(200).json(user);
    } catch (err) {
        console.log('Oops something went wrong!')
        res.json({err});
    }
}

async function deleteOne(req, res) {
    let idx = req.params.id;
    const user = await User.findOne({"_id": req.user._id});
    user.favorites[idx].remove();
    user.save();
    res.status(200).json(user);
}

async function index(req, res) {
    const favorites = await Favorite.find({user: req.user._id});
    console.log('FAVORITES', favorites);
    res.status(200).json(favorites);
}
