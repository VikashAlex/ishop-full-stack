const categoryModel = require("../models/category.model");
const categoryUniueName = require("../utility/helper")
const fs = require('fs')

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
    const { name, slug, status } = req.body;
    const Categoryimage = req.files?.image; 

    if (!name || !slug || !Categoryimage) {
      return res.status(400).json({ msg: "All fileds are required...", success: false });
    }

    try {
      const existing = await categoryModel.findOne({ name });
      if (existing) {
        return res.status(409).json({ msg: "Category name must be unique...😥", success: false });
      }
      const imgName = categoryUniueName(Categoryimage.name)
      const destination = 'public/images/categoryImg/' + imgName;
      Categoryimage.mv(destination, async (error) => {
        if (error) {
          return res.status(500).json({ msg: "File not uploaded...", success: false });
        }

        const createData = await categoryModel.create({
          name,
          slug,
          status,
          image: imgName
        });

        return res.status(201).json({ msg: "Category created successfully...😋", success: true, data: createData });
      });

    } catch (error) {
      return res.status(500).json({ msg: "Internal Server Error...😪", success: false });
    }
  },


  async updateCategory(req, res) {
    try {
      const { id } = req.params
      const category = await categoryModel.findById(id);
      if (category) {
        await categoryModel.findByIdAndUpdate(id, { $set: { status: !category.status } });
        return res.status(201).json({ msg: "Category update successfully...", success: true });
      }
      return res.status(301).json({ msg: "Category not exist in database...", success: false });

    } catch (error) {
      return res.status(501).json({ msg: "Internal Server Error..", success: false });
    }
  },
  async deleteCategory(req, res) {
    try {
      const { id } = req.params;
      const category = await categoryModel.findById(id);
      if (category) {
        fs.unlinkSync(`./public/images/categoryImg/${category.image}`)
        await categoryModel.findByIdAndDelete(id);
        return res.status(201).json({ msg: "Category delete successfully...", success: true })
      }
      return res.status(301).json({ msg: "Category not exist in database...", success: false });
    } catch (error) {
      console.log(error)
      return res.status(501).json({ msg: "Internal Server Error..", success: false });
    }
  },
}

module.exports = categoryController;
