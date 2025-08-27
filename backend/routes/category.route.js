const { getCategory, createCategory, updateCategory, deleteCategory,editCategory } = require('../controllers/category.controller');

const categoryRoutes = require('express').Router();
const fileUpload = require('express-fileupload')



categoryRoutes.get('/get/:id?', getCategory)
categoryRoutes.post('/create', fileUpload({createParentPath: true}), createCategory)
categoryRoutes.patch('/update/:id', updateCategory)
categoryRoutes.delete('/delete/:id', deleteCategory)
categoryRoutes.put('/edit/:id',fileUpload({createParentPath: true}),editCategory)

module.exports = categoryRoutes;