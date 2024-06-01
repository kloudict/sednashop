const productsList = (req, res) => {
    res.render('index', {title: 'Products'});
};

const productInfo = (req, res) => {
    res.render('index', {title: 'Product Info'});
};

const addReview = (req, res) => {
    res.render('index', {title: 'Add a Review'});
};


module.exports = {
    productsList,
    productInfo,
    addReview
};