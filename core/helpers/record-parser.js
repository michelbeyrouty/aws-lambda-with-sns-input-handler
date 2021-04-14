/**
 * parseRecord
 *
 * @param {object} record
 * @returns
 */
function parseRecord ({ record }) {

  const body = JSON.parse(record.body);
  const TopicArn = body.TopicArn.split(':').slice(-1)[0];
  const messageData = JSON.parse(body.Message);

  return { TopicArn, messageData };
}

module.exports = parseRecord;
