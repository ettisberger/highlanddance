import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid/Grid';
import styled from 'styled-components';
import {linkColor} from '../../../theme';

const NavItem = styled.div`
  color: ${linkColor};
  font-size: 18px;
  text-align: center;
  
  && {
    a {
      position: relative;
      color: ${linkColor};
      text-decoration: none;
    }
  
    a:hover {
    }
    
    a:visited {
      color: ${linkColor};
    }
    
    a:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -10px;
      left: 0;
      background-color: ${linkColor};
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }
    
    a:hover:before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`

class NavigationBar extends Component {
    render() {
        return (
                <Grid component={'nav'} container item xs={8} justify={'flex-end'} alignItems={'center'}>
                    <Grid item xs={3}>
                        <NavItem><Link to={''}>HOME</Link></NavItem>
                    </Grid>
                </Grid>
        )
    }
}
export default NavigationBar;