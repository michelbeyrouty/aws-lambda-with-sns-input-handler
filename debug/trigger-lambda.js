const lambdaHandler = require('../index').handler;
const TEST_EVENT = require('./test-event');

lambdaHandler(TEST_EVENT);

module.exports = {};
