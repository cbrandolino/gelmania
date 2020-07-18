import React from 'react';
import styled from 'styled-components';

const LegendBase = styled.div`
  width: 21.5rem;
  height: 1.5rem;
  display: flex;
  position: absolute;
`
const LegendItem = styled.div`
  flex: 1 1 0px;
  height: 1.5rem;
  text-align: center;
  &:not(:last-of-type) {
    border-right: 1px solid black;
  }
`
const XLegend = styled(LegendBase)`
  padding-left: 1.5rem;
`
const YLegend = styled(LegendBase)`
  padding-right: 1.5rem;
  transform: translateY(21.5rem) rotate(-90deg);
  transform-origin: top left;
`

const displayValues = value => Array.isArray(value) ? value.join(' - ') : value;

const legendContainers = {
  x: XLegend,
  y: YLegend
};

const Legend = ({ axis, buckets }) => {
  const LegendContainer = legendContainers[axis];
  const sortedBuckets = (axis === 'y') ? buckets.reverse() : buckets;
  return (
    <LegendContainer>
      {sortedBuckets.map(label => <LegendItem key={label}>{displayValues(label)}</LegendItem>)}
    </LegendContainer>
  )
};

export default Legend;
