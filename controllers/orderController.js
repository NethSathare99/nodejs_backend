const Admin = require('../models/Order');

module.exports = router;

function createUpdate(req, res, next) {
    Order.createUpdate(req.body, req.customer.username, req.customer.code)
        .then(order => order ? res.json(order) : res.status(400).json({ message: 'unable to create / update order' }))
        .catch(err => next(err));
}

function getAllOrders(req, res, next) {
    Order.getAllOrders(req.query, req.customer.code)
        .then(order => order ? res.json(order) : res.status(400).json({ message: 'can not get any orders' }))
        .catch(err => next(err));
}

function deleteOrder(req, res, next) {
    console.log(req);
    Order.deleteOrder(req.params.id, req.customer.username, req.customer.code)
        .then(status => (status && !status.error) ? res.status(200).json({ message: 'successfully removed' }) :
            res.status(500).json({ message: res.error ? res.error : 'error removing object' }))
        .catch(err => next(err));
}

function getOrder(req, res, next) {
    Order.getOrder(req.params.id, req.customer.code)
        .then(order => order ? res.json(order) : res.status(400).json({ message: 'can not get any orders' }))
        .catch(err => next(err));
}

