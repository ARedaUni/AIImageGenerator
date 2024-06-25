const express = require('express')
const router = express.Router();
const imageController = require('../controllers/imageController');


router.post('/generateImage', imageController.generateImage);

module.exports = router;