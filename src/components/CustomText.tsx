import styled from '@emotion/styled';
import { Typography } from '@material-ui/core';
import { palette } from '@theme';

export const PrimaryTitle = styled(Typography)`
  font-size: 32px;
  color: ${palette.primary.main};
  text-align: center;
`

export const PrimarySubtitle = styled(PrimaryTitle)`
  font-size: 16px;
`