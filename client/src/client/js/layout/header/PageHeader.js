import React, {Component} from 'react';
import styled from 'styled-components';
import Hidden from '@material-ui/core/Hidden'
import {whiteColor, brandPrimary} from '../../theme';

// const PageHeaderWrapper = styled.header`
//     height: 100%;
//     width: 100%;
//     background-size: cover;
//     background-position: center center;
//     background-repeat: no-repeat;
//     background-image: url(${props => props.imageUrl});
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

const PagerHeaderWrapper = styled.header`
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 0;
  height: 500px;
  background-image: linear-gradient(155deg, #000 0%, ${brandPrimary} 50%, ${brandPrimary} 100%);
  
  &:after {
    content: "";
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(${props => props.imageUrl});
    opacity: .05;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
`;

// const PageHeaderTitle = styled.h1`
//     margin-top: 0;
//     margin-bottom: 0;
//     font-size: 4rem;
//     color: ${whiteColor};
// `;

const Svg = styled.svg`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
`;

export default class PageHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <Hidden xsDown>
                    {/*<PageHeaderWrapper imageUrl={this.props.imageUrl}>*/}
                    {/*    <PageHeaderTitle className="animated fadeInDown slow">{this.props.title}</PageHeaderTitle>*/}
                    {/*</PageHeaderWrapper>*/}
                    <PagerHeaderWrapper imageUrl={this.props.imageUrl}>
                        <Svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
                            <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="white" strokeWidth="120" strokeLinecap="round"/>
                        </Svg>
                    </PagerHeaderWrapper>
                </Hidden>
            </React.Fragment>
        )
    }
}