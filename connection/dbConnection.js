const moongoose = require("mongoose");
require("dotenv").config();

const connection = async () => {
  const con = await moongoose.connect(process.env.MONGO_URL);

  console.log("Connected to Mongo Database");
};

module.exports = { connection };
