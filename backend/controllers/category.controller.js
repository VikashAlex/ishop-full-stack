const categoryModel = require("../models/category.model");

const categoryController = {
  async getCategory(req, res) {
    try {
    const getCategory = await categoryModel.find();
    if (getCategory) {
         return res.status(201).json({ msg: "Data Get Successfully...", getCategory });
    }
    } catch (error) {    
       return res.status(501).json({ msg: "Internal Server Error..", success: false });
    }
  },

  async createCategory(req, res) {
    try {
      if (!req.body.name || !req.body.slug) {
        return res.status(401).json({ msg: "Name and slug both are requied...", success: false });
      }
      const existing = await categoryModel.findOne({name:req.body.name});
      if (!existing) {
        const createData = await categoryModel.create({
        name: req.body.name,
        slug: req.body.slug,
        status: req.body.status,
      });
      createData.save();
      return res.status(201).json({ msg: "Category create successfully...😋", success: true });
      }
      
       return res.status(301).json({ msg: "Category name must be unique...😥", success: false });
     
    } catch (error) {
      return res.status(501).json({ msg: "Internal Server Error...😪", success: false });
    }
  },

  async updateCategory(req, res) {
      try {
        const {id} = req.params
        const category = await categoryModel.findById(id);
    if (category) {
        await categoryModel.findByIdAndUpdate(id,{$set:{status:!category.status}});
        return res.status(201).json({ msg: "Category update successfully...", success: true });
    }
        return res.status(301).json({ msg: "Category not exist in database...", success: false });
    
    } catch (error) {
       return res.status(501).json({ msg: "Internal Server Error..", success: false });
    }
  },
  async deleteCategory(req, res) {
   try {
    const {id} = req.params;
    const category = await categoryModel.findById(id);
    if (category) {
        await categoryModel.findByIdAndDelete(id);
        return res.status(201).json({ msg: "Category delete successfully...", success: true })
    }
    return res.status(301).json({ msg: "Category not exist in database...", success: false });
   } catch (error) {
     return res.status(501).json({ msg: "Internal Server Error..", success: false });
   }
},
}

module.exports = categoryController;
