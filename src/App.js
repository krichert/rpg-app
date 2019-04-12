import React, { Component, Fragment } from 'react';
import './App.css';
import Grid from "@material-ui/core/es/Grid/Grid";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Sidebar from './Sidebar';
import Content from './Content';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#8d6e63',
            main: '#795548',
            dark: '#4e342e',
        },
        secondary: {
            light: '#eeeeee',
            main: '#9e9e9e',
            dark: '#424242',
        },
        info: {
            light: '#64b5f6',
            main: '#2196f3',
            dark: '#1565c0'
        },
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#b71c1c'
        },
        success: {
            light: '#a5d6a7',
            main: '#4caf50',
            dark: '#2e7d32'
        },
        warning: {
            light: '#ffab40',
            main: '#ff9100',
            dark: '#ff6d00'
        },
    },
    typography: {
        fontFamily: [
            'Metamorphous',
            'Almendra',
            'Roboto',
        ].join(','),
    }
});

class App extends Component {
    render() {
        return (
            <Fragment>
                <MuiThemeProvider theme={theme}>
                    <Grid container spacing={0}>
                        <Grid item xs={9}>
                            <Content />
                        </Grid>
                        <Grid item xs={3}>
                            <Sidebar/>
                        </Grid>
                    </Grid>
                </MuiThemeProvider>
            </Fragment>
        );
    }
}

export default App;
