const EVENT_DATA = require('./event-data');

module.exports = {
  Records: [{
    body: JSON.stringify({
      'Type':             'Notification',
      'MessageId':        '781de09b-f240-54a9-8c86-b8ab4eecef21',
      'TopicArn':         EVENT_DATA.PING.TOPIC_ARN,
      'Message':          EVENT_DATA.PING.MESSAGE,
      'Timestamp':        '2020-11-19T18:33:16.432Z',
      'SignatureVersion': '1',
      'Signature':        '',
      'SigningCertURL':   '',
      'UnsubscribeURL':   '',
    }),
  }],
};
