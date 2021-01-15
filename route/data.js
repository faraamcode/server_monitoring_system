const express = require('express');
const router = express.Router();

// route to post data for (Post API /data)
router.get('/', (req, res, next) => {
 res.send({status : "success"})
})
 const data = [];
// Post API for anystring and return of that string
router.post('/data', (req, res, next) => {
 data.push(req.body);
  
 res.status(200).json(data)
 
})
// Get API for anystring as data
router.get('/data', (req, res, next) => {
 
 res.status(200).json(data);
 
})
module.exports = router
