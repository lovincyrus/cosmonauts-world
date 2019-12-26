const NextI18Next = require('next-i18next').default;
// const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;

// const localeSubpathVariations = {
//   foreign: {
//     cn: 'cn',
//     kr: 'kr',
//     ru: 'ru',
//   },
//   all: {
//     en: 'en',
//     cn: 'cn',
//     kr: 'kr',
//     ru: 'ru',
//   },
// };

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['kr', 'cn', 'ru'],
  // localeSubpaths: localeSubpathVariations[localeSubpaths],
  // https://github.com/isaachinman/next-i18next/issues/523
  localePath: typeof window === 'undefined' ? 'public/locales' : 'locales',
  debug: false,
});
