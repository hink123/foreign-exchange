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
        let favorite = new Favorite(req.body);
        await favorite.save();
        res.status(200).json(favorite);
    } catch (err) {
        console.log('Oops something went wrong!')
        res.json({err});
    }
}

async function deleteOne(req, res) {
    const deletedFav = await Favorite.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedFav);
}

async function index(req, res) {
    const favorites = await Favorite.find({user: req.user._id});
    res.status(200).json(favorites);
}
