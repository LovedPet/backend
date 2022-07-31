const app = require('../server/app')
const logger = require('../lib/logger')
const dotenv = require('dotenv')
const { setupGracefulShutdownServer } = require('../lib/setupGracefulShutdownServer')

dotenv.config()

const {
  PORT = 3000,
} = process.env

const onListening = () => logger.info({
  message: 'LovedPet server is up',
  operation: 'lovedpet_startup',
  metadata: {
    port: PORT,
  },
})

const server = app.listen(PORT, onListening)

setupGracefulShutdownServer(process, server)
