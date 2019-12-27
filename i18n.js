const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  lng: 'en',
  defaultLanguage: 'en',
  otherLanguages: ['kr', 'cn', 'ru'],
  // https://github.com/isaachinman/next-i18next/issues/523
  localePath: typeof window === 'undefined' ? 'public/locales' : 'locales',
  browserLanguageDetection: true,
  debug: false,
});
