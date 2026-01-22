const express = require("express");
const adminRoutes = express.Router();
const adminAuth = require("../adminAuth.js");
adminRoutes.use(adminAuth);
const {
  createVideo,
  updateVideo,
  deleteVideos,
  softDeleteVideos,
  // archiveVideo,
  // deleteVideoVersionHistory,
  // deleteAll,
} = require("../controllers/video.controller.js");

adminRoutes.post("/", createVideo);

// update a video
adminRoutes.put("/:id", updateVideo);

// delete multiple video
adminRoutes.delete("/:ids", deleteVideos);

// soft delete videos
adminRoutes.delete("/softDelete/:ids", softDeleteVideos);

// soft delete videos
// adminRoutes.delete("/softDeleteAll", softDeleteAllVideos); //TODO

// adminRoutes.delete("/deleteAll", deleteAllVideos); //TODO

// adminRoutes.put("/archive/:ids", archiveVideo); //TODO

// adminRoutes.put("/archiveAll", archiveAllVideos); //TODO

// adminRoutes.put("/deleteVersionHistory/:ids", deleteVideoVersionHistory); //TODO

// adminRoutes.put("/deleteVersionHistoryOfParent/:ids", deleteVersionHistoryOfParent); //TODO

// adminRoutes.put("/deleteAllVersionHistory", deleteAllVideoVersionHistorys); //TODO

// adminRoutes.put("/findVersionHistory/:parentId", findVersionHistory); //TODO

//find version history of a theme

module.exports = adminRoutes;
