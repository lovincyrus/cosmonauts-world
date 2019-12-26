const env = require('./env');

/* Warning:
 Do not use process.env here, as this file is loaded from next.config.js and env is not setup yet by Next
*/
const publicConfig = {
  development: {},
  testing: {},
  production: {},
};

/* Use process.env.NODE_ENV here as this one come from node ! */
const currentEnv = process.env.NODE_ENV;
module.exports = publicConfig[currentEnv];
