import React from 'react';
import styled from 'styled-components';
import useDataColor from '../../hooks/useDataColor';
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

const SubjectGrid = ({ condition='experiment' }) => {
  const { getCondition } = useStudyContext();
  const { getSubjectColor } = useDataColor({ condition });
  const { subjects } = getCondition(condition);

  return (
      <Grid>
        {
          subjects.map(({ id, data }) =>
            <SubjectCell
              key={id}
              id={id}
              data={data}
              color={getSubjectColor(data)}
            />)
        }
      </Grid>
  );
}


export default SubjectGrid;