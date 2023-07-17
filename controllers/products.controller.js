const Product = require("../models/product.model");
async function getAllProducts(req, res) {
  try {
    const products = Product.findAll();
    res.render("customer/products/all-products", { products: products });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllProducts: getAllProducts,
};
