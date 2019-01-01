import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import theme, {brandPrimary, whiteColor} from '../../theme';
import NavigationBar from './navigation/NavigationBar';
import MobileNavigationBar from './navigation/MobileNavigationBar';
import Hidden from '@material-ui/core/Hidden'
import {Link} from 'react-router-dom';

const HeaderBar = styled.header`
    background-color: ${whiteColor};
    top: 0;
    left: 0;
    width: 100%;
    padding: 50px 30px;
    z-index: 9999;
    opacity: 0.8;
`;

const Logo = styled.img`
    max-width: 100%; 
    max-height: 70px;
    float: left;
    
  ${theme.breakpoints.down('sm')}{
    max-width: 100%; 
  }
`;

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Hidden smUp>
                    <MobileNavigationBar/>
                </Hidden>
                <Hidden xsDown>
                    <HeaderBar>
                        <Grid container spacing={16}>
                            <Grid item xs={4}>
                                <Link to={''}><Logo src={'/assets/images/logo_header_blue.png'}/></Link>
                            </Grid>
                            <NavigationBar/>
                        </Grid>
                    </HeaderBar>
                </Hidden>
            </React.Fragment>
        )
    }
}