const productModel = require("../models/product.model");
const categoryUniueName = require("../utility/helper")
const fs = require('fs')

const productController = {
  async getProduct(req, res) {
    const { id } = req.params;
    let getCategory = null
    try {
      if (id) {
        getCategory = await productModel.findById(id);
      } else {
        getCategory = await productModel.find();
      }
      if (getCategory) {
        return res.status(201).json({ msg: "Data Get Successfully...", getCategory });
      }
    } catch (error) {
      console.log(error)
      return res.status(501).json({ msg: "Internal Server Error..", success: false });
    }
  },
  async createProduct(req, res) {
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
}

module.exports = productController;