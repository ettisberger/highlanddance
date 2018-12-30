/*
    ./client/App.jsx
*/
import React from 'react';
import {Route} from 'react-router-dom';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Home from './home/Home';
import Tickets from './tickets/Tickets';
import Contact from './contact/Contact';
import styled from 'styled-components';
import theme from './theme'
import Partner from './partner/Partner';

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
                    <Route name="partner" exact path="/partner" component={Partner} />
                    <Route name="tickets" exact path="/tickets" component={Tickets} />
                    <Route name="contact" exact path="/contact" component={Contact} />
                </Main>
                <Footer/>
            </React.Fragment>
        )
    }
}
