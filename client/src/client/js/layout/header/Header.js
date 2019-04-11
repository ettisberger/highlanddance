import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import theme, {brandPrimary, whiteColor} from '../../theme';
import NavigationBar from './navigation/NavigationBar';
import MobileNavigationBar from './navigation/MobileNavigationBar';
import Hidden from '@material-ui/core/Hidden'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeLanguage} from '../../actions/actions';

const HeaderBar = styled.header`
    position: absolute;
    background-color: transparent;
    top: 10px;
    left: 0;
    width: 100%;
    padding: 20px 30px 50px 30px;
    z-index: 9999;
    opacity: 0.8;
`;

const LanguageBar = styled.div`
    position: absolute;
    background-color: transparent;
    text-align: right;
    top: 0;
    right: 0;
    padding: 10px;
    width: 100%;
    z-index: 9999;
    color: ${whiteColor};
    font-size: 12px;
    
    a {
      color: ${whiteColor};
    }
`;

const Logo = styled.img`
    max-width: 100%; 
    max-height: 90px;
    float: left;
    
  ${theme.breakpoints.down('sm')}{
    max-width: 100%; 
  }
`;

const mapStateToProps = function(state){
    return {
        language: state.language,
    }
}

const mapDispatchToProps = dispatch => ({
    changeLanguage : language => {
        dispatch(changeLanguage(language));
    }
})

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Hidden smUp>
                    <MobileNavigationBar/>
                </Hidden>
                <Hidden xsDown>
                    <LanguageBar>
                        <a href="#" style={this.props.language === 'de' ? {fontWeight: 'bold'} : {}} onClick={() => this.props.changeLanguage('de')}>deutsch</a>
                        <span> | </span>
                        <a href="#" style={this.props.language === 'en' ? {fontWeight: 'bold'} : {}} onClick={() => this.props.changeLanguage('en')}>english</a></LanguageBar>
                    <HeaderBar>
                        <Grid container spacing={16}>
                            <Grid item xs={4}>
                                <Link to={''}><Logo src={'/assets/images/logo_header.png'}/></Link>
                            </Grid>
                            <NavigationBar/>
                        </Grid>
                    </HeaderBar>
                </Hidden>
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);