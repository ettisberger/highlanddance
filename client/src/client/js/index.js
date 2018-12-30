import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from './App';
import highlanddanceTheme from './theme';
import '../styles/main.scss'

const renderApp = () => {
    render(
        <MuiThemeProvider theme={highlanddanceTheme}>
            <Router>
                <App />
            </Router>
        </MuiThemeProvider>,
        document.getElementsByTagName('root')[0]
    );
};

renderApp();