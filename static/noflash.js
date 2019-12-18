// Insert this script in your index.html right after the <body> tag.
// This will help to prevent a flash if dark mode is the default.

(function () {
  // Change these if you use something different in your hook.
  const storageKey = 'darkMode';
  const classNameDark = 'dark-mode';
  const classNameLight = 'light-mode';

  function setClassOnDocumentBody(darkMode) {
    document.body.classList.add(darkMode ? classNameDark : classNameLight);
    document.body.classList.remove(darkMode ? classNameLight : classNameDark);
  }

  const preferDarkQuery = '(prefers-color-scheme: dark)';
  const mql = window.matchMedia(preferDarkQuery);
  const supportsColorSchemeQuery = mql.media === preferDarkQuery;
  let localStorageTheme = null;
  try {
    localStorageTheme = localStorage.getItem(storageKey);
  } catch (err) {}
  const localStorageExists = localStorageTheme !== null;
  if (localStorageExists) {
    localStorageTheme = JSON.parse(localStorageTheme);
  }

  // Determine the source of truth
  if (localStorageExists) {
    // source of truth from localStorage
    setClassOnDocumentBody(localStorageTheme);
  } else if (supportsColorSchemeQuery) {
    // source of truth from system
    setClassOnDocumentBody(mql.matches);
    localStorage.setItem(storageKey, mql.matches);
  } else {
    // source of truth from document.body
    const isDarkMode = document.body.classList.contains(classNameDark);
    localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
  }
}());
