import React, {Component} from 'react';
import styled from 'styled-components';
import Hidden from '@material-ui/core/Hidden'
import {whiteColor, brandPrimary} from '../../theme';

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
    background-image: linear-gradient(144deg,#25408f,#25408f,#695cff);
    color: ${whiteColor};
    display: flex;
    justify-content: center;
`;

const PageHeaderTitle = styled.h1`
    display: flex;
    align-items: center;
    height: 100%;
	color: ${whiteColor};
	text-transform: uppercase;
	font-size: 4rem;
	text-shadow: 0px 2px 4px rgba(0,0,0,.4);
`;

export default class PageHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <Hidden xsDown>
                    <PagerHeaderWrapper>
						<PageHeaderBackground>
	                        <PageHeaderTitle className="animated fadeInDown slow">{this.props.title}</PageHeaderTitle>
						</PageHeaderBackground>

                    </PagerHeaderWrapper>
                </Hidden>
            </React.Fragment>
        )
    }
}