/*
    ./client/App.jsx
*/
import React from 'react';
import {Route} from 'react-router-dom';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Home from './home/Home';
import styled from 'styled-components';
import theme from './theme'

const Main = styled.main`
  margin-top: 110px;
  
  ${theme.breakpoints.down('sm')}{
    margin-top: 56px; 
  }
`;

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Main>
                    <Route name="home" exact path="/" component={Home} />
                </Main>
                <Footer/>
            </React.Fragment>
        )
    }
}
