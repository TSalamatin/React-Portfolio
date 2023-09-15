import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#05ddfb',
    },
    secondary: {
      main: '#9807f7',
    },
    error: {
      main: '#f51100',
    },
    info: {
      main: '#3d3dff',
    },
    success: {
      main: '#32ff00',
    },
    background: {
      default: '#161616',
      paper: '#0e0e0e',
    },
    text: {
      primary: '#fffefe',
    },
  },
  typography: {
    fontFamily: 'Playfair Display',
    button: {
      fontFamily: 'Roboto',
    },
  },

  // The 'overrides' key is where you define custom CSS properties
  overrides: {
  
    MuiContainer: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10%',
        marginLeft: '10%',
      },
    },
    MuiPaper: {
      root: {
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        padding: '5%',
        fontFamily: 'Trebuchet MS',
        fontSize: '120%',
        margin: '10%',
     
      },
    },
    MUIButton: {
      root: {
        height: 'fit-content'
      },
      
    }
  },
});

export default theme;
