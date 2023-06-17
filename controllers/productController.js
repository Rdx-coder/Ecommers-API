const Product = require('../models/product');

// Render create product form
exports.renderCreateProductForm = (req, res) => {
  res.render('create-product');
};

// API to add products to the database
exports.createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;

    const product = new Product({ name, quantity });
    await product.save();

    res.redirect('/');
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Render list of products
exports.renderProductList = async (req, res) => {
  try {
    const products = await Product.find();

    res.render('list-products', { products });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

// API to delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);

    res.redirect('/');
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Render update quantity form
exports.renderUpdateQuantityForm = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    res.render('update-quantity', { product });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

// API to update quantity of a product
exports.updateProductQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    product.quantity = quantity;
    await product.save();

    res.redirect('/');
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};
