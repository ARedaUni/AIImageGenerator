const express = require("express");
const router = express.Router();
const albumController = require('../controllers/albumController')
const validateToken = require("../middleware/validateTokenHandler");



router.get("/", validateToken, albumController.accessAlbum);
router.post("/", albumController.createAlbum);
router.delete("/", albumController.deleteAlbum);

module.exports = router