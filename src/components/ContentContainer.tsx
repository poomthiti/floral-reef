import styled from '@emotion/styled';

export const ContentContainer = styled.div<{ bgColor?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${({ bgColor }) => bgColor || ''};
`

export const Content = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
