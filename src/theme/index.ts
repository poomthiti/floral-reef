import { createMuiTheme } from '@material-ui/core/styles';

import palette from 'src/theme/palette';
import { normalize } from 'path';
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
  shadows: Array(25)
    .fill('none')
    .map((el, index) => (
      (index === 8)
        ? '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)'
        : el
    )),
};

export default createMuiTheme(options as any);
