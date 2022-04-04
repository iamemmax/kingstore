const express = require("express");
const { protect, adminAccess } = require("../../config/errorMiddlewares");
const router = express.Router();
const {
  addUser,
  loginUser,
  activateUser,
  logoutUser,
  getUser,
  deleteUser,
  getAllUsers,
  updateReguser,
} = require("../../controller/user");
const upload = require("../../config/upload");
router.post("/register", upload.single("profile"), addUser);
router.post("/login", loginUser);
router.get("/allUsers", protect, adminAccess, getAllUsers);
router.get("/:id", protect, getUser);
router.put("/:id", protect, updateReguser);
router.put("/verify/:id/:token", activateUser);
router.delete("/delete/:id", adminAccess, deleteUser);
// router.put("/edit/:id", protect, updatedUser);
router.post("/logout", logoutUser);

// admin access

module.exports = router;
