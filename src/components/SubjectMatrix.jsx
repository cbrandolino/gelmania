import React from 'react';
import styled from 'styled-components';

import Subject from './Subject';


const Grid = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`


const SubjectMatrix = ({ subjects }) => {

  return (
    <Grid>
      {
        subjects.map(({ id, data }) => <Subject id={id} data={data} />)
      }
    </Grid>
  );
}


export default SubjectMatrix;