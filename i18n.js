const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default();
// const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;

const localeSubpathVariations = {
  none: {},
  foreign: {
    cn: 'cn',
    kr: 'kr',
    ru: 'ru',
  },
  all: {
    en: 'en',
    cn: 'cn',
    kr: 'kr',
    ru: 'ru',
  },
};

module.exports = new NextI18Next({
  lng: 'en',
  defaultLanguage: 'en',
  otherLanguages: ['kr', 'cn', 'ru'],
  localeSubpaths: localeSubpathVariations[localeSubpaths],
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  debug: false,
});
