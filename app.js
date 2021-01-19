const express = require('express')
const bodyParser = require('body-parser'); // Check below comment 
// whenever I try to remove bodyParser my post will stop working
const dataRoute = require('./route/data')
const userRoute = require('./route/user')
const app = express()
app.use(bodyParser.json())//Comment this and do as the Multiline comment below.

/* 
app.use(express.json()) // This will worj the same way body-parser works
*/
app.use(dataRoute)
app.use('/user',userRoute)
app.listen(3000)
 