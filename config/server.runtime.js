const serverConfig = {
  development: {},
  testing: {},
  production: {},
};

const currentEnv = process.env.NODE_ENV;
module.exports = serverConfig[currentEnv];
