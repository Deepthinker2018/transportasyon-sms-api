// @flow

'use strict';

const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const config = require('../config.json')
const api = require('./app/routes/api.routes')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(cors())

app.use('/api', api)

const server = app.listen(config.application.port, () => {
  const host = server.address().address
  const port = server.address().port
  console.log(`App is listening at http://${host}/${port}`)
})