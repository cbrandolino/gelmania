import React from 'react';
import styled from 'styled-components';
import { useStudyContext } from '../contexts/StudyContext';
import Legend from './Legend';
import Subject from './Subject';

const Matrix = styled.div`
  position: relative;
  width: 23rem;
  height: 23rem;
  display: flex;
  flex-wrap: wrap;
`;

const Grid = styled.div`
  width: 20rem;
  height: 20rem;
  margin: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`
const SubjectMatrix = ({ dataTemplate }) => {
  const { subjects, xBuckets, yBuckets } = useStudyContext();
  return (
    <Matrix>
      <Legend axis="x" buckets={xBuckets} />
      <Legend axis="y" buckets={yBuckets} />
      <Grid>
        {
          subjects.map(({ id, data }) => <Subject key={id} id={id} data={data} />)
        }
      </Grid>
    </Matrix>
  );
}


export default SubjectMatrix;