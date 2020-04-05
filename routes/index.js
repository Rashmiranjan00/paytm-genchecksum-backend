var express = require('express');
var router = express.Router();
var paytmRouter = require('./router');


// router.get('/', paytmRouter);
router.get('/generate_checksum', paytmRouter);
// router.post('/generate_checksum', paytmRouter);

module.exports = router;
