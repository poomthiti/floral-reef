import { createTheme } from '@material-ui/core/styles';

import palette from 'src/theme/palette';
export {palette}

const options = {
  palette,
  typography: {
    fontFamily: 'Inter',
  },
  shape: {
    borderRadius: 27.5,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 550,
      md: 770,
      lg: 900,
      xl: 1200
    }
  },
  shadows: ['3.35px 3.72px 8px 1px rgba(0,0,0,0.45)']
};

export default createTheme(options as any);