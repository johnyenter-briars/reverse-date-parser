import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: '50px'
    }
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ThemeProvider>,
  document.getElementById('root')
);
