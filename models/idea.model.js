const mongoose = require("mongoose");
const { CommonSchema } = require("./common.model");

const IdeaSchema = mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
    },
    idea: { type: String, default: "" },
    archived: { type: Boolean, default: false },
    softDelete: { type: Boolean, default: false },
    userCreatedBy: { type: String, default: "" },
    userUpdatedBy: { type: String, default: "" },
  },
  {
    timestamps: true,
  },
);

const Idea = mongoose.model("Idea", IdeaSchema, "idea");

module.exports = Idea;
