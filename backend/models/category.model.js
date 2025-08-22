const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Category name is required"],
      unique: true,
      minlength: [3, "Category name must be at least 3 characters"],
      maxlength: [50, "Category name must not exceed 50 characters"],
    },

    slug: {
      type: String,
      trim: true,
      required: [true, "Slug is required"],
      unique: true,
      lowercase: true,
    },
    img: {
      type: String,
      trim: true,
      default: null,
    },

    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Category", categorySchema);
