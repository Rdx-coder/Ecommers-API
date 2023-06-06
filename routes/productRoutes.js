const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/create', productController.renderCreateProductForm);
router.post('/create', productController.createProduct);
router.get('/', productController.renderProductList);
router.post('/:id/delete', productController.deleteProduct);
router.get('/:id/update_quantity', productController.renderUpdateQuantityForm);
router.post('/:id/update_quantity', productController.updateProductQuantity);

module.exports = router;
