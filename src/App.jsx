import React from 'react';
import { ThemeProvider } from 'styled-components';
import Typography from 'typography';
import theme from 'typography-theme-github';

import Demo from './pages/Demo';

const typography = new Typography(theme);
typography.injectStyles();

const App = () =>
  <ThemeProvider theme={theme}>
    <Demo />
  </ThemeProvider>


export default App;
