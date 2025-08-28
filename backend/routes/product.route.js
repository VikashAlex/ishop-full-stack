const { getProduct, createProduct } = require('../controllers/product.controller');

const productRoutes = require('express').Router();
const fileUpload = require('express-fileupload')

productRoutes.get('/get/:id?', getProduct)
productRoutes.post('/create', fileUpload({createParentPath: true}), createProduct)

module.exports = productRoutes;