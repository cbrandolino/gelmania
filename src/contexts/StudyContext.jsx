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
  console.log(stats);
  return (
    <StudyContext.Provider
      value={{ subjects, xBuckets, yBuckets, getAxisLabels, stats }}>
      { children }
    </StudyContext.Provider>
  );
};

const useStudyContext = () => useContext(StudyContext);

export { StudyProvider, useStudyContext };