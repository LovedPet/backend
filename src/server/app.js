const express = require('express')
const cors = require('cors')
// Controllers
const userController = require('../controllers/user')
const httpLogger = require('../middlewares/http-logger')
// const errorHandler =

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

// app.use(errorHandler)
module.exports = app
