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
            uri: 'sip:agent@5t4n6j0wnrl.sip.livekit.cloud'  // Make sure this is the Retell SIP URI
          }
        ]
      }
    ]
  };

  logger.info({ response }, 'Sending connect verb to jambonz');
  res.json(response);
});

module.exports = router;

