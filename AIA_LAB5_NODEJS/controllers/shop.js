const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getProducts = (req, res, next) => {
  req.session.isLoggedIn = true;
  req.session.success = false;
  Product.fetchAll()
    .then(([products]) => {
      res.render("shop", {
        prods: products,
        pageTitle: "Fight shop",
      });
    })
    .catch((err) => console.log(err));
};

exports.getCart = (req, res, next) => {
  if (req.session.someoneBought == null) {
    req.session.someoneBought = false;
  }

  if(req.session.success == null){
      req.session.success = false;
  }

  const cart = new Cart({});

  Product.fetchAll()
    .then(([products]) => {
      if (req.session.cart != null) {
        for (product of products) {
          if (req.session.cart.items.find((prod) => prod.id === product.id)) {
            cart.add(product, product.id);
            // console.log(product);
          }
        }
      }

      req.session.cart = cart;
      res.render("cart", {
        products: req.session.cart.items,
        totalPrice: Math.round(req.session.cart.totalPrice * 100) / 100,
        someoneBought: req.session.someoneBought,
        success: req.session.success,
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

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  console.log(prodId);
  const cart = new Cart(req.session.cart);
  cart.delete(prodId);
  req.session.cart = cart;
  req.session.someoneBought = false;
  res.redirect("/cart");
};

exports.postClearCart = (req, res, next) => {
  const cart = new Cart({});
  req.session.cart = cart;
  req.session.someoneBought = false;
  res.redirect("/cart");
};

exports.postCartBuy = (req, res, next) => {
  const cart = new Cart({});
  const productIdArray = [];

  Product.fetchAll()
    .then(([products]) => {
      for (product of products) {
        if (req.session.cart.items.find((prod) => prod.id === product.id)) {
          cart.add(product, product.id);
          productIdArray.push(product.id);
        }
      }

      if (req.session.cart.items.length == cart.items.length) {
        //all items from cart are in database, you can delete them :)
        Product.deleteById(productIdArray)
          .then(() => {
            console.log("Items bought successfully and deleted from DB");
            req.session.someoneBought = false;
            req.session.success = true;
            res.redirect("/cart");
          })
          .catch((err) => console.log(err));
      } else {
        //in other case clear cart and go to the list od products
        //   const clearCart = new Cart({});
        //   req.session.cart = clearCart;
        console.log(
          "One of items has been already bought. Cart has been adjusted."
        );
        req.session.someoneBought = true;
        res.redirect("/cart");
      }
    })
    .catch((err) => console.log(err));
};
