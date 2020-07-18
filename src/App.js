import React from 'react';
import { random, gaussianSample } from './helpers/math';
import createSubjects from './helpers/createSubjects';

import SubjectMatrix from './components/SubjectMatrix';

const dataTemplate = (gender, ageRange) => ({ 
  age: Math.round(random(...ageRange)),
  weight: gaussianSample(80, 40),
  height: gaussianSample(70, 35),
});

const yBuckets = ['male', 'female'];
const xBuckets = [[18,23],[24,29],[30,35],[36,41]];

const App = () => {
  return (
    <SubjectMatrix
      subjects={createSubjects({ xBuckets, yBuckets, dataTemplate })}
      xBuckets={xBuckets}
      yBuckets={yBuckets}
    />
  );
};


export default App;
