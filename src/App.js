import React from 'react';
import { ThemeProvider } from 'styled-components';
import Typography from 'typography';
import theme from 'typography-theme-github';
import { random, gaussianSample } from './helpers/math';
import createSubjects from './helpers/createSubjects';

import SubjectMatrix from './components/SubjectMatrix';

const typography = new Typography(theme);
typography.injectStyles();

const dataTemplate = (gender, ageRange) => ({ 
  age: Math.round(random(...ageRange)),
  weight: gaussianSample(80, 40),
  height: gaussianSample(70, 35),
});

const xBuckets = ['male', 'female'];
const yBuckets = [[18,23],[24,29],[30,35],[36,41]];

const App = () =>
  <ThemeProvider theme={theme}>
    <SubjectMatrix
      subjects={createSubjects({ xBuckets, yBuckets, dataTemplate })}
      xBuckets={xBuckets}
      yBuckets={yBuckets}
    />
  </ThemeProvider>


export default App;
