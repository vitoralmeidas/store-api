const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ featured: false });
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  // query params => http://.../products?<featured=price=23>
  const { featured } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  console.log(queryObject);
  const products = await Product.find(queryObject);

  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
