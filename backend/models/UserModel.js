const mongoose = require("mongoose");

const AppUserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  userType: {
    type: String,
    required: true,
  },
  
  other: {
    type: String,
    required: true,
  },
});

const AppUser = mongoose.model("AppUser", AppUserSchema);

module.exports = AppUser;
