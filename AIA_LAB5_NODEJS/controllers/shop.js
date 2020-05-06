const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([products]) => {
      res.render("shop", {
        prods: products,
        pageTitle: "Fight shop",
        // path: "/",
      });
    })
    .catch(err => console.log(err));
};

exports.getCart = (req,res, next) => {
    res.render('cart', {
        pageTitle: 'Cart'
    });
}
