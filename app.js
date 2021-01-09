

const http = require('http') //You dont this anymore, It already in the express package
const express = require('express')
const bodyParser = require('body-parser'); //You don't need this too. It already in th express
const dataRoute = require('./route/data')
const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(dataRoute)
app.listen(3000)
 