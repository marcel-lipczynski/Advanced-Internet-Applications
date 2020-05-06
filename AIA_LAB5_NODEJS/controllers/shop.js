const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getProducts = (req, res, next) => {
  req.session.isLoggedIn = true;
  //   req.session.cart = new Cart({});
  Product.fetchAll()
    .then(([products]) => {
      res.render("shop", {
        prods: products,
        pageTitle: "Fight shop",
        // path: "/",
      });
    })
    .catch((err) => console.log(err));
};

exports.getCart = (req, res, next) => {
  
  const cart = new Cart({});

  Product.fetchAll()
    .then(([products]) => {
      console.log(req.session.cart);
      if (req.session.cart != null) {
        for (product of products) {
          if (req.session.cart.items.find((prod) => prod.id === product.id)) {
            cart.add(product, product.id);
            // console.log(product);
          }
        }
      }

      req.session.cart = cart;
      console.log(req.session.cart.items);
      res.render("cart", {
        products: req.session.cart.items,
        pageTitle: "Cart",
      });
    })
    .catch((err) => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  const cart = new Cart(req.session.cart ? req.session.cart : {});
  console.log(`You added product with Id: ${prodId} to the cart`);

  Product.findById(prodId)
    .then(([[product]]) => {
      cart.add(product, prodId);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};
