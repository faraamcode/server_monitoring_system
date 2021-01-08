const express = require('express');
const router = express.Router();

// route to post data for (Post API /data)
router.get('/', (req, res, next) => {
 res.send('<form action="/data" method="POST"><input type="text" name= "anystring"/><button type="submit">Submit</submit></form>');
})
// Post API for anystring and return of that string
router.post('/data', (req, res, next) => {
 const anystring = req.body.anystring
  
 res.status(201).json({
  message: 'Post created succesfuly',
  post: {id: new Date().toISOString(), data: anystring}
 });
 
})
// Get API for anystring as data
router.get('/data', (req, res, next) => {
 
 res.status(200).json([{data: "I am happy to be part of this bootcamp"},
{data: "Jazakumullahu haerah to the organizers of this bootcamp"}
]);
 
})
module.exports = router;