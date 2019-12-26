const withCSS = require('@zeit/next-css');

// module.exports = withCSS({});

module.exports = withCSS({
  publicRuntimeConfig: {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
      ? process.env.LOCALE_SUBPATHS
      : 'none',
  },
});
