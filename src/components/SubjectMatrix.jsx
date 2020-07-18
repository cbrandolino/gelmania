import React from 'react';
import styled from 'styled-components';
import Legend from './Legend';
import Subject from './Subject';


const Matrix = styled.div`
  position: relative;
  width: 22rem;
  height: 22rem;
  display: flex;
  flex-wrap: wrap;
`

const Grid = styled.div`
  width: 20rem;
  height: 20rem;
  margin-left: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`
const SubjectMatrix = ({ xBuckets, yBuckets, subjects }) => {

  return (
    <Matrix>
      <Legend axis="x" buckets={xBuckets} />
      <Legend axis="y" buckets={yBuckets} />
      <Grid>
        {
          subjects.map(({ id, data }) => <Subject id={id} data={data} />)
        }
      </Grid>

    </Matrix>
  );
}


export default SubjectMatrix;