import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import Hidden from '@material-ui/core/Hidden'
import {whiteColor, brandPrimary, Inlay, blackColor, brandSecondary} from '../../theme';
import {FormattedMessage} from 'react-intl';
import {Link, withRouter} from 'react-router-dom';
import {CONTACT_MAIL} from '../../common/constants';
import {createMuiTheme} from '@material-ui/core';

const PagerHeaderWrapper = styled.header`
	position: relative;
   	
	&:before {
		position: absolute;
		z-index: 0;
		bottom: -10px;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: ${brandSecondary};
		border-bottom-left-radius: 80% 15%;
		border-bottom-right-radius: 80% 15%;
  		content: "";
		left: 75px;
		animation: header-swell 7s ease -1.25s infinite;
		opacity: .4;
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
    background-image: linear-gradient(to right, rgba(37,64,143,1) 1%,rgba(90,86,230,1) 22%,rgba(105,92,255,0.96) 28%,rgba(105,92,255,0.8) 50%,rgba(105,92,255,0.35) 63%,rgba(105,92,255,0) 73%,rgba(105,92,255,0) 100%), url(${props => props.imageUrl});
	background-size: cover;
   	background-position: center;
    color: ${whiteColor};
    display: flex;
    justify-content: center;
    
	${createMuiTheme().breakpoints.down('sm')}{
    	padding-top: 0px;
    }

`;

const PageHeaderTitle = styled.h1`
	margin-left: auto;
	margin-right: auto;    
	color: ${whiteColor};
	text-transform: uppercase;
	font-size: 4rem;
	text-shadow: 0px 1px 4px rgba(0,0,0,.8);
	//font-family: 'Lora';
	font-family: Georgia, Times, serif;
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

const ContactButton = styled.a`
	${StyledButton};
`;

class PageHeader extends Component {
    render() {
        return (
            <React.Fragment>
                {/*<Hidden xsDown>*/}
                    <PagerHeaderWrapper>
						<PageHeaderBackground imageUrl={this.props.imageUrl}>
	                        <Inlay>
		                        <PageHeaderTitle className="animated fadeIn slow">{this.props.title}</PageHeaderTitle>
		                        <LinkContainer className={"animated fadeIn slow"} hidden={this.props.location.pathname != '/'}>
			                        <LinkButton to={'classes'}>
				                        <FormattedMessage id="navigation.classes"/>
				                        <i className="material-icons">
					                        calendar_today
				                        </i>
			                        </LinkButton>
			                        <ContactButton href={`mailto:`+ CONTACT_MAIL}>
				                        <FormattedMessage id="navigation.contact"/>
				                        <i className="material-icons">
					                        contact_mail
				                        </i>
			                        </ContactButton>
		                        </LinkContainer>
	                        </Inlay>
						</PageHeaderBackground>

                    </PagerHeaderWrapper>
                {/*</Hidden>*/}
            </React.Fragment>
        )
    }
}

export default withRouter(PageHeader);