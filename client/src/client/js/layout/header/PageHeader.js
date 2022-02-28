import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { createTheme } from '@material-ui/core';
import { CONTACT_MAIL } from '../../common/constants';
import theme, { brandSecondary, Inlay, whiteColor } from '../../theme';
import {useLocation} from "react-router";

const PagerHeaderWrapper = styled.header`
  position: relative;
   	
  &:before {
    position: absolute;
    z-index: 0;
    bottom: -10px;
    width: 100%;
    height: 100%;
    background-color: ${brandSecondary};
    border-bottom-left-radius: 80% 15%;
    border-bottom-right-radius: 80% 15%;
    content: "";
    left: 75px;
    animation: header-swell 7s ease -1.25s infinite;
    opacity: .4;
  
    ${theme.breakpoints.down('xs')}{
      bottom: 0;
    }
  }
	
  @keyframes header-swell {
    0%, 100% {
      transform:translateY(-10px);
    }
  
    50% {
      transform:translateY(5px);
    }
  }
`;

const PageHeaderBackground = styled.div`
  padding-top: 200px;
  padding-bottom: 200px;
  border-bottom-left-radius: 80% 15%;
  border-bottom-right-radius: 80% 15%;
  position: relative;
  z-index: 1;
  overflow: hidden;
  background-image: linear-gradient(to right, rgba(116, 201, 246, 0.2) 1%, rgba(107, 195, 240, 0.3) 22%, rgba(102, 191, 236, 0.4) 28%, rgba(88, 182, 227, 0.5) 50%, rgba(72, 172, 218, 0.6) 63%, rgba(54, 163, 208, 0.7) 73%, rgba(40, 157, 202 ,0.8) 100%), url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  color: ${whiteColor};
  display: flex;
  justify-content: center;
  
  ${createTheme().breakpoints.down('xs')}{
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

const PageHeaderTitle = styled.h1`
  margin-left: auto;
  margin-right: auto;    
  color: ${whiteColor};
  text-transform: uppercase;
  font-size: 4rem;
  text-shadow: 0px 1px 4px rgba(0,0,0,.8);
  font-family: Georgia, Times, serif;
  
  ${createTheme().breakpoints.down('sm')}{
    font-size: 3rem;
  }
  
  ${createTheme().breakpoints.down('xs')}{
    font-size: 3rem;
  }
`;

const LinkContainer = styled.div`
  margin-top: 1rem;
  
  i {
    font-size: 1.3rem;
    padding-left: 10px;
    vertical-align: text-top;
  }
`;

const StyledButton = css`
  margin-right: 20px;
  padding: 10px;
  color: ${whiteColor};
  background-color: transparent;
  font-size: 1.3rem;
  border: 1px solid${whiteColor};
  
  &:hover {
    background-color: ${brandSecondary};
  }
`;

const LinkButton = styled(Link)`
  ${StyledButton};
`;

const ContactButton = styled(Link)`
  ${StyledButton};
`;

const PageHeader = (props) => {
    let location = useLocation()

    return (
      <React.Fragment>
        {/* <Hidden xsDown> */}
        <PagerHeaderWrapper>
          <PageHeaderBackground imageUrl={props.imageUrl}>
            <Inlay>
              <PageHeaderTitle className="animated fadeIn slow">{props.title}</PageHeaderTitle>
              <LinkContainer
                className="animated fadeIn slow"
                hidden={location.pathname !== '/'}
              >
                <LinkButton to="classes">
                  <FormattedMessage id="navigation.classes"/>
                  <i className="material-icons">
                    calendar_today
                  </i>
                </LinkButton>
              </LinkContainer>
            </Inlay>
          </PageHeaderBackground>

        </PagerHeaderWrapper>
        {/* </Hidden> */}
      </React.Fragment>
    );
}

export default PageHeader;
