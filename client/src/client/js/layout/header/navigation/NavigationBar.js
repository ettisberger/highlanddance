import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid/Grid';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { whiteColor } from '../../../theme';

const NavItem = styled.div`
  color: ${whiteColor};
  font-size: 18px;
  text-align: center;

  && {
    a {
      position: relative;
      color: ${whiteColor};
      text-decoration: none;
    }
  
    a:hover {
    }
    
    a:visited {
      color: ${whiteColor};
    }
    
    a:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -10px;
      left: 0;
      background-color: ${whiteColor};
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }
    
    a:hover:before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;

class NavigationBar extends Component {
  render() {
    return (
      <Grid component="nav" container item xs={10} justify="flex-end" alignItems="center">
        <Grid item xs={2}>
          <NavItem><Link to=""><FormattedMessage id="navigation.home" /></Link></NavItem>
        </Grid>
        <Grid item xs={2}>
          <NavItem><Link to="about"><FormattedMessage id="navigation.about" /></Link></NavItem>
        </Grid>
        <Grid item xs={2}>
          <NavItem><Link to="hustle"><FormattedMessage id="navigation.hustle" /></Link></NavItem>
        </Grid>
        <Grid item xs={2}>
          <NavItem><Link to="classes"><FormattedMessage id="navigation.classes" /></Link></NavItem>
        </Grid>
        <Grid item xs={2}>
          <NavItem><Link to="teacher"><FormattedMessage id="navigation.teacher" /></Link></NavItem>
        </Grid>
        <Grid item xs={2}>
          <NavItem><Link to="gallery"><FormattedMessage id="navigation.gallery" /></Link></NavItem>
        </Grid>
      </Grid>
    );
  }
}

export default NavigationBar;
