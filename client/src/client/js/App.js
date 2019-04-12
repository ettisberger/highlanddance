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
import Teacher from './teacher/Teacher';
import Classes from './classes/Classes';

const Main = styled.main`    
  // ${theme.breakpoints.down('sm')}{
  //   margin-top: 56px; 
  // }
`;

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Main>
                    <Route name="home" exact path="/" component={Home} />
                    <Route name="about" exact path="/about" component={About} />
                    <Route name="classes" exact path="/classes" component={Classes} />
                    <Route name="teacher" exact path="/teacher" component={Teacher} />
                    <Route name="partner" exact path="/partner" component={About} />
                </Main>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default App;