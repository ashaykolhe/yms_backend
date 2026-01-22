const express = require("express");
const router = express.Router();
const {
  getVideos,
  getVideo,
} = require("../controllers/video.controller.js");

router.get("/", getVideos);
router.get("/:id", getVideo);

//search all documents

module.exports = router;
