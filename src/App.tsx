import { ThemeProvider } from '@mui/styles';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { theme } from './shared/css/theme';

/**
 * @returns {JSX.Element} - Main app component.
 */
function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
