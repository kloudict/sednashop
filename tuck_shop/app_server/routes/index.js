var express = require('express');
var router = express.Router();

const mainCtrl = require('../controllers/main');

const productsCtrl = require('../controllers/products');
const otherCtrl = require('../controllers/other');

/* GET home page. */
router.get('/', mainCtrl.index);

router.get('/products', productsCtrl.productsList);
router.get('/products/product', productsCtrl.productInfo);
router.get('/products/product/review/new', productsCtrl.addReview);

router.get('/about', otherCtrl.about);

module.exports = router;
