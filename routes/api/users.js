const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.use(require('../../config/auth'));
router.post('/favorites', checkAuth, usersCtrl.addFavorite);
router.delete('/favorites/:id', checkAuth, usersCtrl.deleteOne)

module.exports = router;

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}