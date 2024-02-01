const moongose = require("mongoose");

const ClientSchema = new moongose.Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
    unique: true,
  },

  phone: {
    type: String,
  },
});

module.exports = moongose.model("Client", ClientSchema);
