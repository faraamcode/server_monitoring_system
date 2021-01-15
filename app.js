const express = require('express')
const bodyParser = require('body-parser'); //You don't need this too. It already in th express
// whenever I try to remove bodyParser my post will stop working
const dataRoute = require('./route/data')
const app = express()
app.use(bodyParser.json())
app.use(dataRoute)
app.listen(3000)
 