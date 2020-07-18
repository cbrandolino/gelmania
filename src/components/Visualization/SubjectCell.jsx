import React from 'react';
import styled from 'styled-components';
import useDataColor from '../../hooks/useDataColor';

const InfoBox = styled.div`
  display: none;
  position: absolute;
  z-index: 3;
`
const SpriteSquare = styled.div.attrs(({ squareColor }) => 
  ({
    style: {
      background: squareColor
    }
  }))`
  box-sizing: border-box;
  position: relative;
  width: 1rem;
  height: 1rem;
  background-color: ${({ squareColor }) => squareColor};
  border: 1px solid white;
  &:hover { 
    box-shadow: inset 0 0 6px white;
  }
  &:hover ${InfoBox} {
    display: block;
  }
`

const Subject = ({ id, data }) => {
  const squareColor = useDataColor(data);
  return (
    <SpriteSquare id={`subject-${id}`} squareColor={squareColor}>
      <InfoBox>hello</InfoBox>
    </SpriteSquare>
  );
}

export default Subject;