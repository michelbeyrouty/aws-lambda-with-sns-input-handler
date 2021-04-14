module.exports.globals = {
  helpers: {

    models: {
      rest: {

      },
    },

    utils: {
      validation: require('../app/helpers/validation'),
    },

  },

  CONSTANTS: require('./constants'),
  APIS:      require('./apis'),
  ROUTES:    require('./routes').routes,
};
