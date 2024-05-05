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

// Model for login users
const User = mongoose.model("login-user", LoginSchema);

// Model for wishlist
const Wishlist = mongoose.model("wishlist", WishlistSchema);

// Model for cart
const Cart = mongoose.model("cart", CartSchema);

const collection = new mongoose.model("login-user", LoginSchema; "wishlist", WishlistSchema; "cart", CartSchema);

module.exports = collection;
