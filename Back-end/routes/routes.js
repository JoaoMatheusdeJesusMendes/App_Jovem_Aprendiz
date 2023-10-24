const express = require("express");
const router = express.Router();

const { registerUser, loginUser, authenticateUser } = require("../controllers/loginController");
const { getUserById, getUsers, deleteUser } = require("../controllers/userController");

//auth
router.post("/auth/register", registerUser);
router.post("/auth/login", loginUser);
router.get("/auth/:id", authenticateUser);

//user
router.get("/user/:id", getUserById);
router.get("/user", getUsers);
router.delete("/user/deleteUser/:id", deleteUser);

module.exports = router;