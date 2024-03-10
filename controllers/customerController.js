const Customer = require('../models/Customer');

module.exports = router;

function authenticate(req, res, next) {
    Customer.authenticate(req.body)
        .then(customer => customer ? res.json(customer) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    Customer.getAll()
        .then( customer => res.json(customer))
        .catch(err => next(err));
}

function forgotPassword(req, res, next) {
    Customer.forgotPassword(req.body)
        .then(response => response ? res.json('success') : res.status(400).json({ message: 'Email not sent' }))
        .catch(err => next(err));
}

function resetPassword(req, res, next) {
    Customer.resetPassword(req.body)
        .then(response => response ? res.json('success') : res.status(400).json({ message: 'Error in password reset' }))
        .catch(err => next(err));
}