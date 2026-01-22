const mongoose = require("mongoose");
const { CommonSchema } = require("./common.model");

const VideoSchema = mongoose.Schema(
  {
    // child: {
    //   type: mongoose.ObjectId,
    //   ref: "CommonSchema",
    // },
    backgroundVisualsPrompt: {
      type: String,
      default: "",
    },
    backgroundVisualsVisuals: {
      type: String,
      default: "",
    },
    themePrompt: {
      type: String,
      default: "",
    },
    speechToTextOutput: {
      type: String,
      default: "",
    },
    srt: {
      type: String,
      default: "",
    },
    metadata: {
      type: String,
      default: "",
    },
    archived: { type: Boolean, default: false },
    softDelete: { type: Boolean, default: false },
    status: {
      type: String,
      default: "NEXT",
    },
    type: { type: String, default: "long" },
    domain: {
      type: String,
      default: "",
    },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    userCreatedBy: { type: String, default: "" },
    userUpdatedBy: { type: String, default: "" },
    backgroundMusic: { type: String, default: "" },
  },
  {
    timestamps: true,
  },
);

const Video = mongoose.model("Video", VideoSchema, "video");

module.exports = Video;
