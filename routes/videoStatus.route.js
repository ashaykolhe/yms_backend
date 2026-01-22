const express = require("express");
const router = express.Router();
const {
  createVideoStatus,
  loadDefaultVideoStatus,
} = require("../controllers/videoStatus.controller.js");

router.post("/", createVideoStatus);

router.put("/", loadDefaultVideoStatus);

module.exports = router;
