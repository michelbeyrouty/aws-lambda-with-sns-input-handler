require('dotenv').config();
const route  = require('./helpers/route');
const parseRecord = require('./helpers/record-parser');

/**
 * lambdaHandler
 *
 * @param {json} event
 * @returns
 */
async function lambdaHandler (event) {

  for (const record of event.Records) {
    const { TopicArn, messageData } = parseRecord({ record });

    await route({ TopicArn, messageData });
  }

  return;
}

module.exports = lambdaHandler;
