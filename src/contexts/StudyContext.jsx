import React, { createContext, useContext } from 'react';
import initSubjects from '../helpers/initSubjects';

const StudyContext = React.createContext();

const StudyProvider = ({ children, xBuckets, yBuckets, dataTemplate, statsFor }) => {
  const { subjects, stats } = initSubjects({ xBuckets, yBuckets, dataTemplate, statsFor });
  return (
    <StudyContext.Provider value={{ subjects, xBuckets, yBuckets }}>
      { children }
    </StudyContext.Provider>
  );
};

const useStudyContext = () => useContext(StudyContext);

export { StudyProvider, useStudyContext };