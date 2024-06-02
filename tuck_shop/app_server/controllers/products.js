const productsList = (req, res) => {
    res.render('product-list', {
        title: 'ShopApp - Eat now, Pay later.',
        pageHeader: {
            title: 'ShopApp',
            strapline: 'Find a meal to eat while working!'
        },
        products: [{
            name: 'Noodles',
            description: 'Two minute noodles',
            rating: 3,
            price: 'R5.00',
            options: ['Durban Curry','Chicken Mayo','Beef']
        },{
            name: 'Energy Drink',
            description: 'Boost your senses',
            rating: 4,
            price: 'R20.00',
            options: ['Monster','Red Bull','MoFaya']
        },{
            name: 'Chips',
            description: 'Snack to keep the hunger away',
            rating: 2,
            price: 'R15.00',
            options: ['Simba','Lays','Niknaks']
        }],
        sidebar: 'Looking for a quick meal? ShopApp helps you grab a meal, sign for it and only pay at the end of the month. Eat as much as you want and keep track of your bill.'
    });
};

const productInfo = (req, res) => {
    res.render('product-info', {title: 'Product Info'});
};

const addReview = (req, res) => {
    res.render('product-review', {title: 'Add a Review'});
};


module.exports = {
    productsList,
    productInfo,
    addReview
};