const index = (req, res) => {
    res.render('index', {title: "Shop App"});
 
 };

 module.exports = {
    index
 };