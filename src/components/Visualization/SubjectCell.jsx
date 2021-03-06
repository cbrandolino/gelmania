import React from 'react';
import styled from 'styled-components';

const InfoBox = styled.div`
  display: none;
  position: absolute;
  z-index: 3;
`
const SpriteSquare = styled.div.attrs(({ color }) => 
  ({
    style: {
      background: color,
    }
  }))`
  box-sizing: border-box;
  position: relative;
  width: 1rem;
  height: 1rem;
  border: 1px solid white;
  &:hover { 
    box-shadow: inset 0 0 6px white;
  }
  &:hover ${InfoBox} {
    display: block;
  }
`

const Subject = ({ id, data, color }) => {
  return (
    <SpriteSquare id={`subject-${id}`} color={color}>
      <InfoBox>hello</InfoBox>
    </SpriteSquare>
  );
}

export default Subject;