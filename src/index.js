import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@mui/material';


// Create a custom theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#c33332', // Change this to the desired primary color
    },
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);