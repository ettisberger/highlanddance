/*
    ./client/App.jsx
*/
import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Home from './home/Home';
import About from './about/About';
import Teacher from './teacher/Teacher';
import Classes from './classes/Classes';
import Gallery from './gallery/Gallery';
import HighlandHustle from './hustle/HighlandHustle';
import Contact from './contact/Contact';

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
        <Header />
        <Main>
          <Route name="home" exact path="/" component={Home} />
          <Route name="about" exact path="/about" component={About} />
          <Route name="hustle" exact path="/hustle" component={HighlandHustle} />
          <Route name="classes" exact path="/classes" component={Classes} />
          <Route name="teacher" exact path="/teacher" component={Teacher} />
          <Route name="gallery" exact path="/gallery" component={Gallery} />
          <Route name="contact" exact path="/contact" component={Contact} />
          {/* footer inside of the main container because footers are bitches and dont behave */}
          <Footer />
        </Main>
      </React.Fragment>
    );
  }
}

export default App;
