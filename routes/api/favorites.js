const express = require('express');
const router = express.Router();
const favoritesCtrl = require('../../controllers/favorites');

router.use(require('../../config/auth'));
router.get('/', checkAuth, favoritesCtrl.index)
router.post('/', checkAuth, favoritesCtrl.create);
router.delete('/:id', checkAuth, favoritesCtrl.deleteOne)

module.exports = router;

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}