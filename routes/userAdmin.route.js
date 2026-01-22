const express = require("express");
const adminRoutes = express.Router();
const adminAuth = require("../adminAuth.js");
adminRoutes.use(adminAuth);
const {
  createUser,
  updateUser,
  deleteUsers,
  softDeleteUsers,
  checkIfEmailExists,
} = require("../controllers/user.controller.js");

adminRoutes.post("/", createUser);

// update a user
adminRoutes.put("/:id", updateUser);

// delete multiple user
adminRoutes.delete("/:ids", deleteUsers);

// soft delete users
adminRoutes.delete("/softDelete/:ids", softDeleteUsers);

adminRoutes.post("/checkIfEmailExists", checkIfEmailExists);

// soft delete users
// adminRoutes.delete("/softDeleteAll", softDeleteAllUsers); //TODO

// adminRoutes.delete("/deleteAll", deleteAllUsers); //TODO

// adminRoutes.put("/archive/:ids", archiveUser); //TODO

// adminRoutes.put("/archiveAll", archiveAllUsers); //TODO

module.exports = adminRoutes;
