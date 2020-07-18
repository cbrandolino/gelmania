import React from 'react';
import styled from 'styled-components';

const LegendBase = styled.div`
  width: 20rem;
  display: flex;
`

const LegendItem = styled.div`
  flex: 1 1 0px;
  text-align: center;
`

const XLegend = styled(LegendBase)`
  padding-left: 2rem;
`
const YLegend = styled(LegendBase)`
  position: absolute;
  flex-direction: row-reverse;
  transform:  translateY(21rem) rotate(-90deg);
  transform-origin: top left;
`

const displayValues = value => Array.isArray(value) ? value.join(' - ') : value;

const legendContainers = {
  x: XLegend,
  y: YLegend
};

const Legend = ({ axis, buckets }) => {
  const LegendContainer = legendContainers[axis];
  return (
    <LegendContainer>
      {buckets.map(label => <LegendItem key={label}>{displayValues(label)}</LegendItem>)}
    </LegendContainer>
  )
};

export default Legend;
