const http = require('http')
const express = require('express')
const bodyParser = require('body-parser');
const dataRoute = require('./route/data')
const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(dataRoute)
app.listen(3000)
 