const cuid = require('cuid')
const logger = require('../lib/logger')

const httpLogger = (req, _, _) => {
  const startTime = Date.now()

  const requestId = req.get('x-request-id') || cuid()

  logger.info({
    message: 'Request received',
    request_id: requestId,
    url: req.url,
    path: req.route.path,
    method: req.method,
    params: req.params,
    body: req.body,
    from: 'request',
    start_time: startTime,
  })
}

module.exports = httpLogger
