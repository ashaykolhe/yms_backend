const mongoose = require("mongoose");
const { CommonSchema } = require("./common.model");

const UserSchema = mongoose.Schema(
  {
    // child: {
    //   type: mongoose.ObjectId,
    //   ref: "CommonSchema",
    // },
    email: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      default: "",
    },
    archived: { type: Boolean, default: false },
    softDelete: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    userCreatedBy: { type: String, default: "" },
    userUpdatedBy: { type: String, default: "" },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", UserSchema, "user");

module.exports = User;
