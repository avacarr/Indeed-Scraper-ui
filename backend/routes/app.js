
var express = require('express');
var router = express.Router();
const controller = require('../controllers/appController')


router.put('/get', controller.getURL)
router.put('/update', controller.update)


module.exports = router;