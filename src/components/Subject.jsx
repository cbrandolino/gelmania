import React from 'react';
import styled from 'styled-components';

const InfoBox = styled.div`
  display: none;
  position: absolute;
  z-index: 3;
`
const SpriteSquare = styled.div`
  position: relative;
  width: 1rem;
  height: 1rem;
  background-color: pink;
  &:hover { 
    box-shadow: inset 0 0 6px white;
  }
  &:hover ${InfoBox} {
    display: block;
  }
`;

const Subject = ({ id, data }) => {
  return (
    <SpriteSquare id={`subject-${id}`}>
      <InfoBox>hello</InfoBox>
    </SpriteSquare>
  )
}

export default Subject;