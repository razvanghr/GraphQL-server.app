const moongose = require("mongoose");
const { description } = require("../schema/schema");

const ProjectSchema = new moongose.Schema({
  title: {
    type: String,
  },

  description: {
    type: String,
  },

  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
  },

  clientId: {
    type: moongose.Schema.Types.ObjectId,
    ref: "Client",
  },
});

module.exports = moongose.model("Project", ProjectSchema);
