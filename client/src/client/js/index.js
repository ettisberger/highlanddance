import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {MuiThemeProvider} from '@material-ui/core/styles';
import '../styles/main.scss';
//import {addLocaleData} from 'react-intl';
//import en from 'react-intl/locale-data/en';
//import de from 'react-intl/locale-data/de';
import Provider from 'react-redux/es/components/Provider';
import store from './reducers/store';
import highlanddanceTheme from './theme';
import App from './App';
import LanguageProvider from './LanguageProvider';
import ScrollToTop from './common/ScrollToTop';

// init localization
//addLocaleData([...de, ...en]);

const renderApp = () => {
    render(
        <MuiThemeProvider theme={highlanddanceTheme}>
            <Provider store={store}>
                <LanguageProvider>
                    <Router>
                        <ScrollToTop/>
                        <App/>
                    </Router>
                </LanguageProvider>
            </Provider>
        </MuiThemeProvider>,
        document.getElementsByTagName('root')[0]
    );
};

renderApp();
