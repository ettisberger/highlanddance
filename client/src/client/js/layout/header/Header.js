import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import theme, {accent1Color, brandPrimary} from '../../theme';
import NavigationBar from './navigation/NavigationBar';
import MobileNavigationBar from './navigation/MobileNavigationBar';
import Hidden from '@material-ui/core/Hidden'
import {Link} from 'react-router-dom';

const HeaderWrapper = styled.header`
    background-color: ${brandPrimary};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 30px;
    z-index: 9999;
    opacity: 0.9;
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
                    <HeaderWrapper>
                        <Grid container spacing={16}>
                            <Grid item xs={4}>
                                <Link to={''}><Logo src={'/assets/images/logo_header.png'}/></Link>
                            </Grid>
                            <NavigationBar/>
                        </Grid>
                    </HeaderWrapper>
                </Hidden>
            </React.Fragment>
        )
    }
}