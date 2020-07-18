import React, { createContext, useContext } from 'react';
import initSubjects from '../helpers/initSubjects';

const StudyContext = createContext();

const StudyProvider = ({ children, xBuckets, yBuckets, dataTemplate, statsFor }) => {
  const conditions = {
    experiment: initSubjects({ xBuckets, yBuckets, dataTemplate, statsFor }),
    control: initSubjects({ xBuckets, yBuckets, dataTemplate, statsFor })
  };
  console.log(conditions);
  const axesLabels = {
    x: xBuckets,
    y: yBuckets,
  };
  const getCondition = condition => conditions[condition];
  const getAxisLabels = (axis) => axesLabels[axis];
  const currentKey = statsFor[0];
  return (
    <StudyContext.Provider
      value={{ getCondition, getAxisLabels, currentKey }}
    >
      { children }
    </StudyContext.Provider>
  );
};

const useStudyContext = () => useContext(StudyContext);

export { StudyProvider, useStudyContext };