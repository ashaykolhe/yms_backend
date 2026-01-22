const express = require("express");
const router = express.Router();
const {
  getIdeas,
  getIdea,
} = require("../controllers/idea.controller.js");

router.get("/", getIdeas);
router.get("/:id", getIdea);
module.exports = router;
