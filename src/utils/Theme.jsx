import { createTheme } from "@mui/material";

// Primero define las paletas
const lightPalette = {
  mode: 'light',
  primary: {
    main: '#00a76f',
    light: '#5be49b',
    dark: '#007867',
  },
  secondary: {
    main: '#8e33ff',
    light: '#c684ff',
    dark: '#5119b7',
  },
  error: {
    main: '#FF5630',
    light: '#FFAC82',
    dark: '#b71d18',
  },
  warning: {
    main: '#FFAB00',
    light: '#ffd666',
    dark: '#b76e00',
  },
  info: {
    main: '#00B8D9',
    light: '#61f3f3',
    dark: '#006c9c',
  },
  divider: 'rgba(145,158,171,0.2)',
  text: {
    primary: '#1C252E',
    secondary: '#637381',
    disabled: '#919EAB',
  },
};

const darkPalette = {
  mode: 'dark',
  primary: {
    main: '#00a76f',
    light: '#5be49b',
    dark: '#007867',
  },
  secondary: {
    main: '#8e33ff',
    light: '#c684ff',
    dark: '#5119b7',
  },
  error: {
    main: '#FF5630',
    light: '#FFAC82',
    dark: '#b71d18',
  },
  warning: {
    main: '#FFAB00',
    light: '#ffd666',
    dark: '#b76e00',
  },
  info: {
    main: '#00B8D9',
    light: '#61f3f3',
    dark: '#006c9c',
  },
  divider: 'rgba(145,158,171,0.2)',
  text: {
    primary: '#FFFFFF',
    secondary: '#919EAB',
    disabled: '#637381',
  },
  background: {
    default: '#141A21',
    paper: '#1C252E',
  },
};

// Luego crea los temas
const lightTheme = createTheme({
  palette: lightPalette,
  typography: {
    fontWeightLight: 700,
    h1: {
      fontSize: 30,
    },
    h2: {
      fontSize: 26,
    },
    h3: {
      fontSize: 22,
    },
    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 18,
    },
    h6: {
      fontSize: 16,
    },
  },
});

const darkTheme = createTheme({
  palette: darkPalette,
  typography: {
    fontWeightLight: 700,
    h1: {
      fontSize: 30,
    },
    h2: {
      fontSize: 26,
    },
    h3: {
      fontSize: 22,
    },
    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 18,
    },
    h6: {
      fontSize: 16,
    },
  },
});

export { lightTheme, darkTheme };
