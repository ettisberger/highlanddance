import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {MuiThemeProvider} from '@material-ui/core/styles';
import App from './App';
import highlanddanceTheme from './theme';
import '../styles/main.scss'
import {addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';
import store from './reducers/store';
import Provider from 'react-redux/es/components/Provider';
import LanguageProvider from './LanguageProvider';

// init localization
addLocaleData([...de, ...en]);

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

const renderApp = () => {
    render(
        <MuiThemeProvider theme={highlanddanceTheme}>
            <Provider store={store}>
                <LanguageProvider>
                    <Router>
                        <App />
                    </Router>
                </LanguageProvider>
            </Provider>
        </MuiThemeProvider>,
        document.getElementsByTagName('root')[0]
    );
};

renderApp();