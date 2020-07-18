import React from 'react';
import styled from 'styled-components';
import { useStudyContext } from '../../contexts/StudyContext';
import SubjectCell from './SubjectCell';

const Grid = styled.div`
  width: 20rem;
  height: 20rem;
  margin: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`

const SubjectGrid = () => {
  const { subjects } = useStudyContext();
  return (
      <Grid>
        {
          subjects.map(({ id, data }) => <SubjectCell key={id} id={id} data={data} />)
        }
      </Grid>
  );
}


export default SubjectGrid;