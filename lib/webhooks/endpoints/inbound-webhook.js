const router = require('express').Router();

router.post('/inbound-webhook', (req, res) => {
  const { logger } = req.app.locals;
  const payload = req.body;

  logger.info({ payload }, 'Received inbound call webhook');

  const response = {
    verbs: [
      {
        verb: 'connect',
        endpoint: [
          {
            type: 'sip',
            uri: 'sip:5t4n6j0wnrl.sip.livekit.cloud'
          }
        ]
      }
    ]
  };

  logger.info({ response }, 'Sending connect verb to jambonz');
  res.json(response);
});

module.exports = router;
