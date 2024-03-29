const express = require('express')
const cors = require('cors')
// Controllers
const userController = require('../controllers/user')
const configController = require('../controllers/configuration')
const schedulerController = require('../controllers/scheduler')
const httpLogger = require('../middlewares/http-logger')
const errorHandler = require('../middlewares/error-handler')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/_health_check', (_, res) => res.sendStatus(200))

// use httpLogger in middleware of route

app.post(
  '/register',
  httpLogger,
  userController.create
)

app.post(
  '/login',
  httpLogger,
  userController.login
)

app.post(
  '/:user_id/configurations',
  httpLogger,
  configController.create
)

app.get(
  '/:user_id/configurations',
  httpLogger,
  configController.getConfigUser
)

app.post(
  '/:user_id/scheduler',
  httpLogger,
  schedulerController.create
)

app.get(
  '/:user_id/scheduler',
  httpLogger,
  schedulerController.get
)

// app.use(errorHandler)
module.exports = app
