const express = require("express");
const router = express.Router();
const { getDomains } = require("../controllers/domain.controller.js");

router.get("/", getDomains);
module.exports = router;
