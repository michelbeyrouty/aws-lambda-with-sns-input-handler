/**
 * route
 *
 * @param {object} inputs
 * @param {string} inputs.TopicArn
 * @param {object} inputs.messageData
 *
 */
async function route ({ TopicArn, messageData }) {

  console.log('calling route: ' + TopicArn);

  const targetController = app.ROUTES[TopicArn];

  if (targetController) {
    await targetController({ messageData });
  } else {
    console.log(`${targetController} is not supported`);
  }

}

module.exports = route;

