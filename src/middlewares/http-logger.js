const cuid = require('cuid')
const logger = require('../lib/logger')

const httpLogger = (request, _, next) => {
  const startTime = Date.now()

  const requestId = request.get('x-request-id') || cuid()

  logger.info({
    message: 'Request received',
    request_id: requestId,
    url: request.url,
    path: request.route.path,
    method: request.method,
    params: request.params,
    body: request.body,
    from: 'request',
    start_time: startTime,
  })

  next()
}

module.exports = httpLogger
