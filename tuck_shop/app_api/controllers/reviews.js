const mongoose = require('mongoose');
const Prod = mongoose.model('Product');

const reviewsReadOne = (req, res) => {
    res
        .status(200)
        .json({status: 'read one review'});
};
const reviewsCreateOne = (req, res) => {
    res
    .status(201)
    .json({status: 'created one review'});
};
const reviewsUpdateOne = (req, res) => {
    res
    .status(201)
    .json({status: 'updated one review'});
};
const reviewsDeleteOne = (req, res) => {
    res
    .status(204)
    .json({status: 'deleted one review'});
};

module.exports = {
    reviewsReadOne,
    reviewsCreateOne,
    reviewsUpdateOne,
    reviewsDeleteOne
};