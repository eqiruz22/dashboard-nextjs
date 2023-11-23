import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 30,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const productSchema = new Schema({
  name_product: {
    type: String,
    required: true,
  },
  id_product: {
    type: String,
    required: true,
    unique: true,
  },
  type_product: {
    type: String,
  },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
