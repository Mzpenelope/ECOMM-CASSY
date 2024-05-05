const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/Cassy");

connect
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch(() => {
    console.log("Database connection failed");
  });

const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Schema for wishlist
const WishlistSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  productData: {
    type: Object,
    required: true,
  },
});

// Schema for cart
const CartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  productData: {
    type: Object,
    required: true,
  },
});

const collection = new mongoose.model("login-user", LoginSchema);

module.exports = collection;
