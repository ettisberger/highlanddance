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
import About from './about/About';

const Main = styled.main`
  height: 50%;
  
  // ${theme.breakpoints.down('sm')}{
  //   margin-top: 56px; 
  // }
`;

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Main>
                    <Route name="home" exact path="/" component={Home} />
                    <Route name="about" exact path="/about" component={About} />
                    <Footer/>
                </Main>
            </React.Fragment>
        )
    }
}
