const express = require("express");
const adminRoutes = express.Router();
const adminAuth = require("../adminAuth.js");
adminRoutes.use(adminAuth);
const {
  createDomain,
  loadDefaultDomain,
} = require("../controllers/domain.controller.js");
adminRoutes.post("/", createDomain);

adminRoutes.put("/", loadDefaultDomain);

module.exports = adminRoutes;
