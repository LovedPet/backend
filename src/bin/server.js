const app = require('../server/app')
const logger = require('../lib/logger')
const { setupGracefulShutdownServer } = require('../lib/setupGracefulShutdownServer')


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
