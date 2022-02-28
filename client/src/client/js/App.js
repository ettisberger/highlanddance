/*
    ./client/App.jsx
*/
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styled from 'styled-components';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Home from './home/Home';
import Dancing from './dancing/Dancing';
import Teacher from './teacher/Teacher';
import Classes from './classes/Classes';
import Gallery from './gallery/Gallery';
import HighlandHustle from './hustle/HighlandHustle';
import Contact from './studio/Studio';

const Main = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
`;

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Main>
                    <Routes>
                        <Route name="home" exact path="/" element={<Home/>}/>
                        <Route name="about" exact path="/dancing" element={<Dancing/>}/>
                        <Route name="hustle" exact path="/hustle" element={<HighlandHustle/>}/>
                        <Route name="classes" exact path="/classes" element={<Classes/>}/>
                        <Route name="teacher" exact path="/teacher" element={<Teacher/>}/>
                        <Route name="gallery" exact path="/gallery" element={<Gallery/>}/>
                        <Route name="contact" exact path="/studio" element={<Contact/>}/>
                    </Routes>
                    {/* footer inside of the main container because footers are bitches and dont behave */}
                    <Footer/>
                </Main>
            </React.Fragment>
        );
    }
}

export default App;
