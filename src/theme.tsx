import { createTheme } from '@mui/material/styles';
 
export const lightTheme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#D90429',
    },
    secondary: {
      main: '#EF233C',
    },
    success: {
      main: '#88041A',
    },
    background: {
      default: '#0B0A0A',
    },
  },
});

export const darkTheme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#7D82B8',
    },
    secondary: {
      main: '#B7E3CC',
    },
    success: {
      main: '#4A4C6B',
    },
    background: {
      default: '#0B0A0A',
    },
  },
});

