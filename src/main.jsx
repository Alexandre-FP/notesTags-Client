import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme'
import { Routes } from './routes/index.jsx';
import GlobalStyles from "../src/styles/global"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
       <Routes />
    </ThemeProvider>
  </React.StrictMode> 
) 
