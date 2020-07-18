import React, { createContext, useContext } from 'react';
import createSubjects from '../helpers/createSubjects';

const StudyContext = React.createContext();

const StudyProvider = ({ children, xBuckets, yBuckets, dataTemplate }) => {
  const subjects = createSubjects({ xBuckets, yBuckets, dataTemplate });
  return (
    <StudyContext.Provider value={{ subjects, xBuckets, yBuckets }}>
      { children }
    </StudyContext.Provider>
  );
};

const useStudyContext = () => useContext(StudyContext);

export { StudyProvider, useStudyContext };