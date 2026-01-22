const express = require("express");
const adminRoutes = express.Router();
const adminAuth = require("../adminAuth.js");
adminRoutes.use(adminAuth);
const {
  createVideoStatus,
  loadDefaultVideoStatus,
} = require("../controllers/videoStatus.controller.js");

adminRoutes.post("/", createVideoStatus);

adminRoutes.put("/", loadDefaultVideoStatus);

module.exports = adminRoutes;
