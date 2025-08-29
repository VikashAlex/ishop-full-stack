const productModel = require("../models/product.model");
const categoryUniueName = require("../utility/helper")
const fs = require('fs')

const savefile = async (imageObj) => {
  const imageName = categoryUniueName(imageObj.name);
  const destination = 'public/images/product' + imageName;
  await imageObj.mv(destination);
  return imageName;
}
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
    const name = req.body.name;
    try {
      const existing = await productModel.findOne({name});
      if (existing) {
        return res.status(301).json({msg:"Product Already Exsiting...😢",success:false});
      }
      const thumbnail = req.files.thumbnail ? await savefile(req.files.thumbnail) : null;
      const images = req.files?.images
        ? await Promise.all(
          (Array.isArray(req.files.images)
            ?
            req.files.images
            : [req.files.images]
          ).map((img)=> savefile(img))
        )
        :
        []
      await productModel.create({ ...req.body, colors: req.body.colors ? JSON.parse(req.body.colors) : [], thumbnail, images })
      return res.status(201).json({msg:"Product Create Successful...😘",success:true});
    } catch (error) {
      console.log(error)
       return res.status(501).json({msg:"Internal Server Error...",success:false});
    }
  },
}

module.exports = productController;