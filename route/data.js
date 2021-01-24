const express = require('express');
const router = express.Router();
const dataControler = require("../controllers/data")
// route to post data for (Post API /data)
router.get('/', dataControler.getHome)
// Post API for anystring and return of that string
router.post('/data', dataControler.getData )
// Get API for anystring as data
router.get('/data', dataControler.postData )
module.exports = router
