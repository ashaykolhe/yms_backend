const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUser,
  login,
} = require("../controllers/user.controller.js");
router.post("/login", login);
router.get("/", getUsers);
router.get("/:id", getUser);

module.exports = router;
