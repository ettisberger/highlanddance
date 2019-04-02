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
import store from './reducers/store';
import {changeLanguage} from './actions/actions';
import Provider from 'react-redux/es/components/Provider';

// init localization
addLocaleData([...de, ...en]);

const translations = {
    'de': translationsDE,
    'en': translationsEN
};

// testing redux
//window.store = store;
//window.changeLanguage = changeLanguage;

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(changeLanguage("de"));
store.dispatch(changeLanguage("en"));

const renderApp = () => {
    render(
        <MuiThemeProvider theme={highlanddanceTheme}>
            <IntlProvider
                locale={'de'}
                messages={flattenMessages(translations['de'])}
            >
                <Provider store={store}>
                    <Router>
                        <App />
                    </Router>
                </Provider>
            </IntlProvider>
        </MuiThemeProvider>,
        document.getElementsByTagName('root')[0]
    );
};

renderApp();