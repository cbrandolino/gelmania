import React, { createContext, useContext } from 'react';
import initSubjects from '../helpers/initSubjects';

const StudyContext = createContext();

const StudyProvider = ({ children, xBuckets, yBuckets, dataTemplate, statsFor }) => {
  const { subjects, stats } = initSubjects({ xBuckets, yBuckets, dataTemplate, statsFor });
  const axesLabels = {
    x: xBuckets,
    y: yBuckets,
  };
  const getAxisLabels = (axis) => axesLabels[axis];
  const currentKey = statsFor[0];
  return (
    <StudyContext.Provider
      value={{ subjects, getAxisLabels, stats, currentKey }}
    >
      { children }
    </StudyContext.Provider>
  );
};

const useStudyContext = () => useContext(StudyContext);

export { StudyProvider, useStudyContext };