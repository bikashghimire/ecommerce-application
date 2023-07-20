function initializeCart(req, res, next) {
  let cart;

  if (!req.session.cart) {
    cart = new Cart();
  } else {
    cart = new cart(req.session.cart.items);
  }
  req.locals.cart = cart;

  next();
}

module.exports = initialzeCart;
