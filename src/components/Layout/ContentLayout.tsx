import styled from '@emotion/styled';

export const ContentContainer = styled.div<{ bgColor?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: 100%;
  padding: 24px 0 80px;
  background-color: ${({ bgColor }) => bgColor || ''};
`

export const Content = styled.div`
  width: 980px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
