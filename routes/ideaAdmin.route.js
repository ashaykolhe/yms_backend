const express = require("express");
const adminRoutes = express.Router();
const adminAuth = require("../adminAuth.js");
adminRoutes.use(adminAuth);
const {
  createIdea,
  updateIdea,
  deleteIdeas,
} = require("../controllers/idea.controller.js");

adminRoutes.post("/", createIdea);

// update a idea
adminRoutes.put("/:id", updateIdea);

// delete multiple idea
adminRoutes.delete("/:ids", deleteIdeas);

// adminRoutes.delete("/deleteAll", deleteAllIdeas); //TODO

// adminRoutes.put("/archive/:ids", archiveIdea); //TODO

// adminRoutes.put("/archiveAll", archiveAllIdeas); //TODO
module.exports = adminRoutes;
