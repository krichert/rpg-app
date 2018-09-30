import React, { Component, Fragment } from 'react';
import './App.css';
import Grid from "@material-ui/core/es/Grid/Grid";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Navigation from "./Navigation/Navigation";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1b5e20'
    },
    secondary: {
      main: '#3f51b5'
    },
    error: {
      main: '#b71c1c'
    }
  },
});

class App extends Component {
  render() {
    return (
      <Fragment>
        <MuiThemeProvider theme={theme}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Navigation/>
            </Grid>
            <Grid item xs={9}>
              <h1>Content</h1>
            </Grid>
            <Grid item xs={3}>
              <h1>Sidebar</h1>
            </Grid>
            <Grid item xs={12}>
              <h1>Footer</h1>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </Fragment>
    );
  }
}

export default App;
