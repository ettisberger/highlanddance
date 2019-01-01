import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from './App';
import highlanddanceTheme from './theme';
import '../styles/main.scss'
import {addLocaleData, IntlProvider} from 'react-intl';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';
import translationsDE from '../assets/translations/de.json'
import translationsEN from '../assets/translations/en.json'
import {flattenMessages} from './common/translationService';

// init localization
addLocaleData([...de, ...en]);

const translations = {
    'de': translationsDE,
    'en': translationsEN
};

const renderApp = () => {
    render(
        <MuiThemeProvider theme={highlanddanceTheme}>
            <IntlProvider
                locale='de'
                messages={flattenMessages(translations['de'])}
            >
                <Router>
                    <App />
                </Router>
            </IntlProvider>
        </MuiThemeProvider>,
        document.getElementsByTagName('root')[0]
    );
};

renderApp();