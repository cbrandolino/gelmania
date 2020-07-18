import React from 'react';
import Visualization, { SubjectGrid, Legend } from '../components/Visualization';
import { random, gaussianSample } from '../helpers/math';
import { StudyProvider } from '../contexts/StudyContext';

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
    <Visualization>
      <Legend axis="x" />
      <Legend axis="y" />
      <SubjectGrid />
    </Visualization>
  </StudyProvider>;

export default Demo;
