const productModel = require("../models/product.model");
const categoryUniueName = require("../utility/helper")
const fs = require('fs')

const savefile = async (imageObj) => {
  const imageName = categoryUniueName(imageObj.name);
  const destination = 'public/images/product/' + imageName;
  await imageObj.mv(destination);
  return imageName;
}
const productController = {
  async getProduct(req, res) {
    const { id } = req.params;
    let getProduct = null
    try {
      if (id) {
        getProduct = await productModel.findById(id);
      } else {
        getProduct = await productModel.find();
      }
      if (getProduct) {
        return res.status(201).json({ msg: "Data Get Successfully...", getProduct });
      }
    } catch (error) {
      return res.status(501).json({ msg: "Internal Server Error..", success: false });
    }
  },
  async createProduct(req, res) {
    try {
      const name = req.body.name;
      const existing = await productModel.findOne({ name });
      if (existing) {
        return res.status(301).json({ msg: "Product Already Exsiting...😢", success: false });
      }
      const thumbnail = req.files.thumbnail ? await savefile(req.files.thumbnail) : null;
      const images = req.files?.images
        ? await Promise.all(
          (Array.isArray(req.files.images)
            ?
            req.files.images
            : [req.files.images]
          ).map((img) => savefile(img))
        )
        :
        []
      await productModel.create({ ...req.body, colors: req.body.colors ? JSON.parse(req.body.colors) : [], thumbnail, images })
      return res.status(201).json({ msg: "Product Create Successful...😘", success: true });
    } catch (error) {
      console.log(error)
      return res.status(501).json({ msg: "Internal Server Error...", success: false });
    }
  },
  async updateProduct(req, res) {
    const { id } = req.params;
    const { flag2 } = req.body;
    const existing = await productModel.findById(id);
    try {
      if (!existing) {
        return res.status(301).json({ msg: "product not exiting...", success: false });
      }
      const update = {};
      if (flag2 == 1) {
        update.status = !existing.status;
      } else if (flag2 == 2) {
        update.stock = !existing.stock;
      } else if (flag2 == 3) {
        update.topSelling = !existing.topSelling;
      }
      await productModel.findByIdAndUpdate(id,
        {
          $set: update
        }
      )
      return res.status(201).json({ msg: "product update successful...😊", success: true });
    } catch (error) {
      return res.status(501).json({ msg: "Internal Server Error...", success: false });
    }
  },
  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      const product = await productModel.findById(id);
      if (!product) {
        return res.status(301).json({ msg: "product not found...", success: false });
      }
      if (product.thumbnail) {
        fs.unlinkSync(`./public/images/product/${product.thumbnail}`);
      } else {
        return res.status(303).json({ msg: "thumbnail not found...", success: false });
      }
      if (product.images && product.images.length > 0) {
        // await Promise.all(product.images.map((img)=>deleteFile(img)))
        for (const img of product.images) {
          const filePath = `./public/images/product/${img}`
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
        }
      } else {
        return res.status(304).json({ msg: "imagse not found...", success: false });
      }
      await productModel.findByIdAndDelete(id);
      return res.status(201).json({ msg: "product delete successful...", success: true });
    } catch (error) {
      console.log(error)
      return res.status(501).json({ msg: "Internal Server Error...", success: false });
    }
  },
  async editProduct(req,res){
    try {
          const {id} = req.params;
          const existing = await productModel.findById(id);
          if (!existing) {
            return res.status(301).json({msg:"product not found...",success:false});
          }

          return res.status(201).json({msg:"Product Update Successfull...😊",success:true});
          
        } catch (error) {
           return res.status(501).json({msg:"Internal Server Error..",success:false});
        }
  }

}

module.exports = productController;