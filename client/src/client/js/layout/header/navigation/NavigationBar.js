import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid/Grid';
import styled from 'styled-components';
import {FormattedMessage} from 'react-intl';
import {whiteColor} from '../../../theme';

const NavItem = styled.div`
  color: ${whiteColor};
  font-size: 16px;
  text-align: center;

  && {
    a {
      display: inline-block;
      position: relative;
      text-decoration: none;
      padding: 10px 0;
      color: ${whiteColor};
    }

    .link-wrapper {
      position: relative;
      display: block;
      padding: 20px 0;
    }

    .hover {
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 2px;
        transform: scaleX(0);
        background-color: ${whiteColor};

        transition: transform 0.3s;
      }

      &:hover {
        &:after {
          transform: scaleX(1);
        }
      }
    }

    a:visited {
      color: ${whiteColor};
    }
  }
`;

class NavigationBar extends Component {
    render() {
        return (
            <Grid component="nav" container item xs={10} justifyContent="flex-end" alignItems="center">
                <Grid item xs>
                    <NavItem>
                        <div className="link-wrapper">
                            <Link to="" className="hover">
                                <FormattedMessage id="navigation.home"/>
                            </Link>
                        </div>
                    </NavItem>
                </Grid>
                <Grid item xs>
                    <NavItem>
                        <div className="link-wrapper">
                            <Link to="dancing" className="hover">
                                <FormattedMessage id="navigation.dancing"/>
                            </Link>
                        </div>
                    </NavItem>
                </Grid>
                <Grid item xs>
                    <NavItem>
                        <div className="link-wrapper">
                            <Link to="hustle" className="hover">
                                <FormattedMessage id="navigation.hustle"/>
                            </Link>
                        </div>
                    </NavItem>
                </Grid>
                <Grid item xs>
                    <NavItem>
                        <div className="link-wrapper">
                            <Link to="classes" className="hover">
                                <FormattedMessage id="navigation.classes"/>
                            </Link>
                        </div>
                    </NavItem>
                </Grid>
                <Grid item xs>
                    <NavItem>
                        <div className="link-wrapper">
                            <Link to="teacher" className="hover">
                                <FormattedMessage id="navigation.teacher"/>
                            </Link>
                        </div>
                    </NavItem>
                </Grid>
                <Grid item xs>
                    <NavItem>
                        <div className="link-wrapper">
                            <Link to="gallery" className="hover">
                                <FormattedMessage id="navigation.gallery"/>
                            </Link>
                        </div>
                    </NavItem>
                </Grid>
                <Grid item xs>
                    <NavItem>
                        <div className="link-wrapper">
                            <Link to="studio" className="hover">
                                <FormattedMessage id="navigation.studio"/>
                            </Link>
                        </div>
                    </NavItem>
                </Grid>
            </Grid>
        );
    }
}

export default NavigationBar;
