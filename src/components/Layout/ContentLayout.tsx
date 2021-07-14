import styled from '@emotion/styled';

export const ContentContainer = styled.div<{ bgColor?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: 100%;
  padding: 24px 0;
  background-color: ${({ bgColor }) => bgColor || ''};
`

export const Content = styled.div`
  width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
