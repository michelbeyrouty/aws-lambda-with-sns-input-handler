
const paths = {


};


/**
 * @param {string} key
 * @param {json} vars
 *
 */
module.exports = function (key, vars = {}) {

  let url =  app._.get(paths, key) || '';

  for (const varKey in vars) {
    url = url.replace(`<${varKey}>`, vars[varKey]);
  }

  return url;

};
