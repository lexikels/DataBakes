const mongoose = require("mongoose");

const websiteSchema = new mongoose.Schema({
  name: String,
  url: String,
  description: String,
  catagory: String,
});

const website = mongoose.model("website", websiteSchema);

module.exports = website;
