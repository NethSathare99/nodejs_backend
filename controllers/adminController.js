const Admin = require('../models/Admin');

module.exports = router;

function authenticate(req, res, next) {
    Admin.authenticate(req.body)
        .then(admin => admin ? res.json(admin) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    Admin.getAll()
        .then( admin => res.json(admin))
        .catch(err => next(err));
}

