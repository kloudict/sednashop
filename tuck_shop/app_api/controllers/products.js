const mongoose = require('mongoose');
const Prod = mongoose.model('Product');

const productsReadAll = (req, res) => {
    res
        .status(200)
        .json({status: 'read all products'});
};
const productsCreateOne = (req, res) => {
    res 
        .status(201)
        .json({status: 'created one product'});

};
const productsReadOne = (req, res) => {
    res
        .status(200)
        .json({status: 'read one product'});
};
const productsUpdateOne = (req, res) => {
    res
        .status(201)
        .json({status: 'updated one product'});
};
const productsDeleteOne = (req, res) => {
    res
        .status(204)
        .json({status: 'deleted one product'});
};

module.exports = {
    productsReadAll,
    productsCreateOne,
    productsReadOne,
    productsUpdateOne,
    productsDeleteOne
};