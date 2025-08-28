const { getBrand, createBrand, deleteBrands,updateBrands, editBrands } = require('../controllers/brand.controller');

const brandRoutes = require('express').Router();
const fileUpload = require('express-fileupload')

brandRoutes.get('/get/:id?',getBrand)
brandRoutes.post('/create',fileUpload({createParentPath: true}),createBrand)
brandRoutes.delete('/delete/:id',deleteBrands)
brandRoutes.patch('/update/:id',updateBrands)
brandRoutes.put('/edit/:id',fileUpload({createParentPath: true}),editBrands)

module.exports = brandRoutes;