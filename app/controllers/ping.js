/**
 * processRecord
 *
 * @param {object} messageData
 */
function processRecord ({ messageData }) {

  _validateInputs({ messageData });

  console.log(messageData.name);

  return;
}

module.exports = processRecord;

// Private function

/**
 * _validateInputs
 *
 * @param {object} messageData
 */
function _validateInputs ({ messageData }) {

  const requiredInputsList = [
    'name',
  ];

  app.helpers.utils.validation.validateRequiredInputs(messageData, requiredInputsList);
}

