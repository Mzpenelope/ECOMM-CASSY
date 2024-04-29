const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb+srv://phillipaaidoo12345:nxBF0e7WpH9Ux0tC@cluster0.2gh3upq.mongodb.net/Cassy");

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

const collection = new mongoose.model("Login-User", LoginSchema);

module.exports = collection;