import React from 'react';
import styled from '@/styles/styled-components';
import Indicator from '@/components/controls/Indicator'

const Loading:React.FC<{}> = () => {
  return (
    <Container>
      <Indicator color={'white'}/>
    </Container>
  )
};

const Container = styled.View`
  background-color: rgba(0,0,0, 0.5);
  position:absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
`;

export default Loading;
