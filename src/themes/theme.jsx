import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Color primario en modo oscuro
    },
    secondary: {
      main: '#f48fb1', // Color secundario en modo oscuro
    },
  },
});
