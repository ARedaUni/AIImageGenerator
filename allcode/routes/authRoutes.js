const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController');
const validateToken = require("../middleware/validateTokenHandler");


router.post("/signup", authController.signUp)
router.post("/login", authController.login)

module.exports = router;