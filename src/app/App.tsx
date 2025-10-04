import React from 'react';
import { createUseStyles } from 'react-jss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LayoutProvider } from '../contexts';
import { Nav } from '../components';
import { ApolloProvider } from '@apollo/client/react';
import { client } from './client';
import { ListPage, Home } from '../screens';
import { ThemeProvider } from 'react-jss';
import { theme } from '../theme/theme';

function App() {
  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
      <LayoutProvider>
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <BrowserRouter>
              <Nav />
              <div className={classes.content}>
                <div className={classes.scrollableArea}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pokemon" element={<ListPage />} />
                  </Routes>
                </div>
              </div>
            </BrowserRouter>
          </div>
        </ThemeProvider>
      </LayoutProvider>
    </ApolloProvider>
  );
}

const useStyles = createUseStyles(
  {
    root: {
      background: theme.colors.background,
      minHeight: '100vh',
      minWidth: '100vw',
      height: '100%',
      width: '100%',
      display: 'flex',
    },
    content: {
      flex: '1',
      overflow: 'hidden',
      position: 'relative',
      padding: theme.spacing.medium,
    },
    scrollableArea: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'auto',
      background: theme.colors.cardBackground,
    },
  },
  { name: 'App' }
);

export default App;
