import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import createMuiTheme from '@material-ui/core/es/styles/createMuiTheme';
import * as PropTypes from 'prop-types';
import theme, { whiteColor } from '../../theme';
import NavigationBar from './navigation/NavigationBar';
import MobileNavigationBar from './navigation/MobileNavigationBar';
import { changeLanguage } from '../../actions/actions';

const HeaderBar = styled.header`
  ${createMuiTheme().breakpoints.up('lg')}{
    width: 1200px;
    margin: 0 auto;
  }
  
  position: absolute;
  background-color: transparent;
  top: 0;
  left: 0;
  right: 0; // without margin auto doesnt do anything
  width: 100%;
  padding: 20px 30px 50px 0px;
  z-index: 9998;
`;

const LanguageBar = styled.div`
    position: relative;
    background-color: transparent;
    text-align: right;
    top: 0;
    right: 0;
    padding: 20px;
    width: 100%;
    z-index: 9999;
    color: ${whiteColor};
    font-size: 12px;
    
    a {
      color: ${whiteColor};
    }
    
    ${theme.breakpoints.down('sm')}{
      top: 50px;
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

const mapStateToProps = function (state) {
  return {
    language: state.language,
  };
};

const mapDispatchToProps = dispatch => ({
  changeLanguage: (language) => {
    dispatch(changeLanguage(language));
  },
});

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Hidden smUp>
          <MobileNavigationBar/>
          <LanguageBar>
            <a
              href="#"
              style={this.props.language === 'de' ? { fontWeight: 'bold' } : {}}
              onClick={() => this.props.changeLanguage('de')}
            >
              deutsch
            </a>
            <span> | </span>
            <a
              href="#"
              style={this.props.language === 'en' ? { fontWeight: 'bold' } : {}}
              onClick={() => this.props.changeLanguage('en')}
            >
              english
            </a>
          </LanguageBar>
        </Hidden>
        <Hidden xsDown>
          <HeaderBar>
            <LanguageBar>
              <a
                href="#"
                style={this.props.language === 'de' ? { fontWeight: 'bold' } : {}}
                onClick={() => this.props.changeLanguage('de')}
              >
                deutsch
              </a>
              <span> | </span>
              <a
                href="#"
                style={this.props.language === 'en' ? { fontWeight: 'bold' } : {}}
                onClick={() => this.props.changeLanguage('en')}
              >
                english
              </a>
            </LanguageBar>
            <Grid container spacing={8}>
              <Grid item xs={2}>
                <Link to=""><Logo src="/assets/images/logo_header.png"/></Link>
              </Grid>
              <NavigationBar/>
            </Grid>
          </HeaderBar>
        </Hidden>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  language: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
