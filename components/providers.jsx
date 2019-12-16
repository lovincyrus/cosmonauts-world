import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { light, dark } from './Theme/index';

export default ({ children }) => {
  const { value } = useDarkMode(false, { storageKey: null, onChange: null });
  const theme = value ? dark : light;

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};
