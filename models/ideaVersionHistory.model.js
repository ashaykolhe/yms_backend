const mongoose = require("mongoose");
const { CommonSchema } = require("./common.model");

const IdeaVersionHistorySchema = mongoose.Schema(
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

const IdeaVersionHistory = mongoose.model(
  "IdeaVersionHistory",
  IdeaVersionHistorySchema,
  "idea_version_history",
);

module.exports = IdeaVersionHistory;
