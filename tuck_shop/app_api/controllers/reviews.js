const mongoose = require('mongoose');
const Prod = mongoose.model('Product');

const reviewsReadOne = async (req, res) => {
    if(req.params.productId.length == 0 || !req.params.productId){
        return res
            .status(400)
            .json({"message":"invalid product Id"});
    }
    else{
        product = await Prod.findById(req.params.productId);
        if(!product){
            return res
                .status(404)
                .json({"message":"product not found"});
        }
        else{
            if(product.reviews && product.reviews.length > 0){
                review = product.reviews.id(req.params.reviewId);
                if(!review){
                    return res
                                .status(400)
                                .json({"message":"review not found."});
                }
                else{
                    response = {
                        product: {
                            product: product.name,
                            id: req.params.productId
                        },
                        review
                    };
                    return res
                        .status(200)
                        .json(response);
                }
            }
            else{
                return res
                    .status(404)
                    .json({"message":"reviews not found."});
            }
        }
        
    }
};
const reviewsCreateOne = async (req, res) => {
    if(req.params.productId.length == 0 || !req.params.productId){
        return res
            .status(400)
            .json({"message":"invalid product Id"});
    }
    else{
        product = await Prod.findById(req.params.productId);
        if(!product){
            return res
                .status(404)
                .json({"message":"product not found"});
        }
        else{
            const review = {
                author: req.body.author,
                rating: parseInt(req.body.rating),
                reviewText: req.body.reviewText
            };
            product.reviews.push(review);
            product.save().then(() => {
                res
                    .status(201)
                    .json(review);
            }).catch(err => {
                console.log(err);
            })
        }    
    }
};
const reviewsUpdateOne = async (req, res) => {
      if(req.params.productId.length != 24 || !req.params.productId) {
        res
            .status(400)
            .json({"message":"invalid productId"});
    }
    else{
        const product = await Prod.findById(req.params.productId);
        if(!product){
            res
                .status(404)
                .json({"messsage": "product not found."});
        }
        else{
            res
            .status(200)
            .json(product);
        }
    }
    const product = await Prod.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        options: req.body.options.split(','),
        rating: parseInt(req.body.rating),
        days: req.body.days2,
        opening: req.body.opening2,
        closing: req.body.closing2,
        closed: req.body.closed2
    });
    if(!product){
        res
            .status(400)
            .json({"message":"could not create product"});
    }
    else{
        res 
        .status(201)
        .json(product);
    }
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