const { getCategory, createCategory, updateCategory, deleteCategory } = require('../controllers/category.controller');

const categoryRoutes = require('express').Router();
const fileUpload = require('express-fileupload')



categoryRoutes.get('/get', getCategory)
categoryRoutes.post('/create', fileUpload({createParentPath: true}), createCategory)
categoryRoutes.patch('/update/:id', updateCategory)
categoryRoutes.delete('/delete/:id', deleteCategory)

module.exports = categoryRoutes;