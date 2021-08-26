import React from 'react';
import styled from '@emotion/styled';
import { Button, PropTypes, Typography, Theme } from '@material-ui/core'
import { palette } from '@theme';

const ButtonContainer = styled(Button) <{ buttonTheme: PropTypes.Color, theme?: Theme }>`
  border-radius: 30px;
  padding: 14px;
  width: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows[0]};
  cursor: pointer;

  ${({ buttonTheme }) => buttonTheme === 'primary'
    ? `
      background-color: ${palette.primary.main};
      color: ${palette.white};
      :hover {
        background-color: #53210c;
      }
      `
    : `
      background-color: ${palette.banner};
      color: ${palette.primary.main};
      :hover {
        background-color: ${palette.primary.main};
        color: ${palette.white};
      }
      `
    }
`;

const ButtonText = styled(Typography) <{ buttonTheme: PropTypes.Color }>`
  font-weight: 600;
  color: inherit;
  text-transform: capitalize;
  font-size: 18px;
`

interface ButtonProps {
  theme?: "primary" | "secondary";
}

export const LineAccountButton: React.FC<ButtonProps> = ({
  theme = "primary"
}) => {
  return (
    <a href="http://lin.ee/XPhIN5e6" target="_blank">
      <ButtonContainer
        variant="contained"
        buttonTheme={theme}
      >
        <ButtonText buttonTheme={theme}>Line Official Account</ButtonText>
      </ButtonContainer >
    </a>
  )
}