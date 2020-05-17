var express = require('express');
var router = express.Router();

var handlerController = require('../controller/handler');


router.post('/newpage' , handlerController.newpage);
router.get('/' , handlerController.home);

module.exports = router;
