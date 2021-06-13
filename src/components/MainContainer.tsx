import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

export const MainContainer: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}