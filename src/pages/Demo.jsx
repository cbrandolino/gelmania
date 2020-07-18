import React from 'react';
import { random, gaussianSample } from '../helpers/math';
import { StudyProvider } from '../contexts/StudyContext';
import SubjectMatrix from '../components/SubjectMatrix';

const dataTemplate = (gender, ageRange) => ({ 
  age: Math.round(random(...ageRange)),
  weight: gaussianSample(80, 40),
  height: gaussianSample(70, 35),
});

const statsFor = ['weight'];

const xBuckets = ['male', 'female'];
const yBuckets = [[18,23],[24,29],[30,35],[36,41]];

const Demo = () =>
  <StudyProvider {...{ dataTemplate, statsFor, xBuckets, yBuckets }}>
    <SubjectMatrix
      xBuckets={xBuckets}
      yBuckets={yBuckets}
    />
  </StudyProvider>;

export default Demo;
