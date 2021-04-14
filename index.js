console.log('starting lambda');

const { globals } = require('./config/globals');
global.app = globals;

const lambdaHandler = require('./core/lambda-handler');
exports.handler = lambdaHandler;

