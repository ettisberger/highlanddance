import React, {Component} from 'react';
import styled from 'styled-components';
import Hidden from '@material-ui/core/Hidden'
import {whiteColor, brandPrimary, Inlay, blackColor} from '../../theme';
import {FormattedMessage} from 'react-intl';
import {Link, withRouter} from 'react-router-dom';

const PagerHeaderWrapper = styled.header`
	position: relative;
	width: 120vw;
	left: 50%;
	transform: translateX(-50%);
   	
	&:before {
		position: absolute;
		z-index: 0;
		bottom: -5px;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: ${brandPrimary};
		border-radius: 0 0 50% 50%;
		content: "";
		left: 50px;
		animation: header-swell 7s ease -1.25s infinite;
		opacity: .2;
	}
	
	@keyframes header-swell {
		0%, 100% {
			transform:translateY(-20px);
		}
		
		50% {
		transform:translateY(5px);
		}
	}
`;

const PageHeaderBackground = styled.div`
    padding-top: 200px;
    padding-bottom: 200px;
	border-radius: 0 0 50% 50%;
    position: relative;
    z-index: 1;
    overflow: hidden;
    background-image: linear-gradient(to right, rgba(37,64,143,1) 1%,rgba(90,86,230,1) 22%,rgba(105,92,255,0.96) 28%,rgba(105,92,255,0.8) 50%,rgba(105,92,255,0.35) 63%,rgba(105,92,255,0) 73%,rgba(105,92,255,0) 100%), url(${props => props.imageUrl});
	background-size: cover;
   	background-position: center;
    color: ${whiteColor};
    display: flex;
    justify-content: center;
`;

const PageHeaderTitle = styled.h1`
	margin-left: auto;
	margin-right: auto;    
	color: ${whiteColor};
	text-transform: uppercase;
	font-size: 4rem;
	text-shadow: 0px 1px 4px rgba(0,0,0,.8);
	//font-family: 'Lora';
`;

const LinkContainer = styled.div`
	margin-top: 1rem;
	
	i {
		font-size: 1.3rem;
		padding-left: 10px;
		vertical-align: text-top;
	}
`;

const ClassesLink = styled(Link)`
	margin-right: 20px;
	padding: 10px;
	color: ${brandPrimary};
	background-color: ${whiteColor};
	font-size: 1.3rem;
	box-shadow: 1px 1px 1px ${blackColor};
`;

const ContactLink = styled(Link)`
	padding: 10px;
	color: ${brandPrimary};
	background-color: ${whiteColor};
	font-size: 1.3rem;
	box-shadow: 1px 1px 1px ${blackColor};
`;

class PageHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <Hidden xsDown>
                    <PagerHeaderWrapper>
						<PageHeaderBackground imageUrl={this.props.imageUrl}>
	                        <Inlay>
		                        <PageHeaderTitle className="animated fadeIn slow">{this.props.title}</PageHeaderTitle>
		                        <LinkContainer className={"animated fadeIn slow"} hidden={this.props.location.pathname != '/'}>
			                        <ClassesLink to={'classes'}>
				                        <FormattedMessage id="navigation.classes"/>
				                        <i className="material-icons">
					                        calendar_today
				                        </i>
			                        </ClassesLink>
			                        <ContactLink to={'classes'}>
				                        <FormattedMessage id="navigation.contact"/>
				                        <i className="material-icons">
					                        contact_mail
				                        </i>
			                        </ContactLink>
		                        </LinkContainer>
	                        </Inlay>
						</PageHeaderBackground>

                    </PagerHeaderWrapper>
                </Hidden>
            </React.Fragment>
        )
    }
}

export default withRouter(PageHeader);