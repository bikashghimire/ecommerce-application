const Product = require("../models/product.model");
async function addCartItem(req, res) {
  let product;
  try {
    const product = await Product.findById(req.body.productId);
  } catch (error) {
    next(error);
    return;
  }
  const cart = res.locals.cart;

  cart.addItem(product);
  req.session.cart = cart;

  res.status(201).json({
    message: "Card updated",
    newTotalItems: cart.totalQuantity,
  });
}

module.exports = {
  addCartItem: addCartItem,
};
