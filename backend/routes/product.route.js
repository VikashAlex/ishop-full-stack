const { getProduct, createProduct,updateProduct,deleteProduct,editProduct } = require('../controllers/product.controller');

const productRoutes = require('express').Router();
const fileUpload = require('express-fileupload')

productRoutes.get('/get/:id?', getProduct)
productRoutes.post('/create', fileUpload({createParentPath: true}), createProduct)
productRoutes.patch('/update/:id', updateProduct)
productRoutes.delete('/delete/:id', deleteProduct)
productRoutes.put('/edit/:id',fileUpload({createParentPath: true}), editProduct)

module.exports = productRoutes;