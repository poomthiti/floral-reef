import React from 'react';
import styled from '@emotion/styled';
import { Button, PropTypes, Typography, Theme } from '@material-ui/core'
import { palette } from '@theme';

const ButtonContainer = styled(Button) <{ buttonTheme: PropTypes.Color, theme?: Theme }>`
  border-radius: 30px;
  padding: 16px;
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows[0]};
  cursor: pointer;

  ${({ buttonTheme }) => buttonTheme === 'primary'
    ? `
    background-color: ${palette.primary.main};
    color ${palette.white};
    :hover {
      background-color: ${palette.primary.dark};
    }
  `
    : `
    background-color: ${palette.banner};
    color: ${palette.primary.main};

    :hover {
      background-color: ${palette.primary.main};
      color: ${palette.white};
    }
    `}
`;

const ButtonText = styled(Typography) <{ buttonTheme: PropTypes.Color }>`
  font-weight: 600;
  color: inherit;
`

interface ButtonProps {
  theme?: "primary" | "secondary";
}

export const LineAccountButton: React.FC<ButtonProps> = ({
  theme = "primary"
}) => {
  return (
    <ButtonContainer
      variant="contained"
      buttonTheme={theme}
    >
      <a href="http://lin.ee/XPhIN5e6" target="_blank">
        <ButtonText buttonTheme={theme}>Line Official Account</ButtonText>
      </a>
    </ButtonContainer >
  )
}