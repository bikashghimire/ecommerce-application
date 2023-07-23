const Order = require("../models/order.model");

const User = require("../models/user.model");

function getOders(req, res) {
  res.render("customer/oders/all-orders");
}

async function addOrder(req, res) {
  const cart = res.locals.cart;

  let userDocument;
  try {
    userDocument = await User.findById(res.locals.uid);
  } catch (error) {
    return next(error);
  }

  const order = new Order(cart, userDocument);

  try {
    order.save();
  } catch (error) {
    next(error);
    return;
  }

  res.redirect("/oders");
}

module.exports = {
  addOrder: addOrder,
  getOders: getOders,
};
