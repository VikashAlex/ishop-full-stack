const { getCategory,createCategory, updateCategory, deleteCategory } = require('../controllers/category.controller');

const categoryRoutes = require('express').Router();

categoryRoutes.get('/get',getCategory)
categoryRoutes.post('/create',createCategory)
categoryRoutes.patch('/update/:id',updateCategory)
categoryRoutes.delete('/delete/:id',deleteCategory)

module.exports = categoryRoutes;