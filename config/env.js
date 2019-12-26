const envCommon = {};

const envConfig = {
  development: {},
  testing: {},
  production: {
    IS_PROD: true,
  },
};

const currentEnv = process.env.NODE_ENV;
module.exports = { ...envCommon, ...envConfig[currentEnv] };
