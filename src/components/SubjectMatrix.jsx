import React from 'react';
import styled from 'styled-components';

import Subject from './Subject';


const Matrix = styled.div`
  width: 22rem;
  height: 22rem;
  display: flex;
  flex-wrap: wrap;
`

const Legend = styled.div`
  padding-left: 2rem;
  width: 20rem;
  height: 2rem;
`

const LegendItem = styled.div`
  margin: auto;
  display: block;
`

const XLegend = styled(Legend)``
const YLegend = styled(Legend)`
`


const Grid = styled.div`
  width: 20rem;
  height: 20rem;
  margin-left: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`

const displayValues = value => Array.isArray(value) ? value.join(' - ') : value;


const SubjectMatrix = ({ xBuckets, yBuckets, subjects }) => {

  return (
    <Matrix>
      <XLegend>
        {xBuckets.map(value => <LegendItem key={value}>{displayValues(value)}</LegendItem>)}
      </XLegend>
      <YLegend>
        y
      </YLegend>
      <Grid>
        {
          subjects.map(({ id, data }) => <Subject id={id} data={data} />)
        }
      </Grid>

    </Matrix>
  );
}


export default SubjectMatrix;