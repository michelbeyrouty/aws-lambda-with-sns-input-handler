module.exports = function validateInputs (data, requiredInputsList) {

  for (const key of requiredInputsList) {
    if (data[key] === null || data[key] === undefined) {
      throw new Error(`${key} param is required`);
    }
  }
};

