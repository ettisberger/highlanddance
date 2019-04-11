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

// const PagerHeaderWrapper = styled.header`
//   position: absolute;
//   width: 100%;
//   z-index: 1;
//   top: 0;
//   height: 500px;
//   background-image: linear-gradient(155deg, #000 0%, ${brandPrimary} 50%, ${brandPrimary} 100%);
//
//   &:after {
//     content: "";
//     background-size: cover;
//     background-position: center center;
//     background-repeat: no-repeat;
//     background-image: url(${props => props.imageUrl});
//     opacity: .25;
//     position: absolute;
//     z-index: -1;
//     width: 100%;
//     height: 100%;
//   }
// `;

// const PageHeaderTitle = styled.h1`
//     margin-top: 0;
//     margin-bottom: 0;
//     font-size: 4rem;
//     color: ${whiteColor};
// `;
const PagerHeaderWrapper = styled.header`
   	width: 100%;
   	height: 35vh;
   	position: absolute;
   	top: 0;
   	display: flex;
   	justify-content: center;
   	z-index: 1;
   	
    background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	background-image: url(${props => props.imageUrl});
	opacity: 1;

	// &:after {
	// 	content: "";
	// 	background-size: cover;
	// 	background-position: center center;
	// 	background-repeat: no-repeat;
	// 	background-image: url(${props => props.imageUrl});
	// 	opacity: .25;
	// 	position: absolute;
	// 	z-index: -1;
	// 	width: 100%;
	// 	height: 100%;
	// }
`;

const PageHeaderBackground = styled.div`
	width: 100%;
    height: 100%;
	background-image: url(${props => props.imageUrl});
	background-size: cover;
   	background-position: center;
  	filter: brightness(50%);
  	clip-path: polygon(100% 100%, 0 0, 0 100%, 100% 100%);
  	position: absolute;
  	top: 0;
  	left: 0;
  	z-index: -1;
`;

const PageHeaderTitle = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
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
                    <PagerHeaderWrapper imageUrl={this.props.imageUrl}>
	                    {/*<PageHeaderBackground imageUrl={this.props.imageUrl}/>*/}
	                    {/*<svg width="100%" height="100%" viewBox="0 0 792 222" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">*/}
		                {/*    <defs>*/}
			            {/*        <pattern id="img1" patternUnits="userSpaceOnUse" width="100%" height="100%">*/}
				        {/*            <image href={this.props.imageUrl} x="0" y="0" width="100%" height="100%" />*/}
			            {/*        </pattern>*/}
			            {/*        <linearGradient id="highland-gradient" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(792,0,0,247.206,0,123.603)">*/}
				        {/*            <stop offset="0" stopColor="#25408f" stopOpacity="1"/>*/}
				        {/*            <stop offset="0.42" stopColor="#2a4597" stopOpacity="1"/>*/}
				        {/*            <stop offset="1" stopColor="#3451a9" stopOpacity="1"/>*/}
			            {/*        </linearGradient>*/}
			            {/*        <clipPath id="test">*/}
				        {/*            /!*fill="url(#img1)"*!/*/}
				        {/*            <path  d="M0,0l0,198.364c13.858,3.892 28.247,6.081 42.48,8.022c12.751,1.74 26.274,3.197 39.061,4.398c41.826,3.928 83.833,6.08 125.805,7.641c123.951,4.609 248.16,3.36 372.1,-0.964c55.219,-1.926 110.673,*/}
				        {/*            -3.885 165.665,-9.62c9.549,-0.995 22.578,-2.52 32.269,-4.442c2.626,-0.521 9.37,-1.886 12.822,-3.722c0.655,-0.348 1.315,-0.75 1.798,-1.313l0,-198.364l-792,0" />*/}
			            {/*        </clipPath>*/}
		                {/*    </defs>*/}
		                {/*    <path fill="none"  d="M0,0l0,198.364c13.858,3.892 28.247,6.081 42.48,8.022c12.751,1.74 26.274,3.197 39.061,4.398c41.826,3.928 83.833,6.08 125.805,7.641c123.951,4.609 248.16,3.36 372.1,-0.964c55.219,-1.926 110.673,*/}
				        {/*            -3.885 165.665,-9.62c9.549,-0.995 22.578,-2.52 32.269,-4.442c2.626,-0.521 9.37,-1.886 12.822,-3.722c0.655,-0.348 1.315,-0.75 1.798,-1.313l0,-198.364l-792,0" />*/}
		                {/*    /!*<image href={this.props.imageUrl} height="500" width="1000" clipPath="url(#test)"></image>*!/*/}
	                    {/*</svg>*/}
	                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
		                        <defs>
		                            <linearGradient id="highland-gradient" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(792,0,0,247.206,0,123.603)">
		                                <stop offset="0" stopColor="#25408f" stopOpacity="1"/>
		                                <stop offset="0.42" stopColor="#2a4597" stopOpacity="1"/>
		                                <stop offset="1" stopColor="#3451a9" stopOpacity="1"/>
		                            </linearGradient>
		                        </defs>
	                        <svg width="100%" height="100%" viewBox="0 -80 792 59" preserveAspectRatio="none">
		                        <path fill="white" d="M0,58.887l0,-58.887c263.441,46.753 528.571,47.58 792,0l0,58.887l-792,0"/>
	                        </svg>

		                    {/*<svg width="100%" height="100%" viewBox="0 0 500 500">*/}
			                {/*    <path fill="red" d="M0,0 500,0 500,500 0,500"/>*/}
		                    {/*</svg>*/}
		                    {/*<svg width="100%" height="100%" viewBox="0 0 792 222" preserveAspectRatio="none">*/}
			                {/*    <path fill="url(#highland-gradient)"  d="M0,0l0,198.364c13.858,3.892 28.247,6.081 42.48,8.022c12.751,1.74 26.274,3.197 39.061,4.398c41.826,3.928 83.833,6.08 125.805,7.641c123.951,4.609 248.16,3.36 372.1,*/}
			                {/*    -0.964c55.219,-1.926 110.673,-3.885 165.665,-9.62c9.549,-0.995 22.578,-2.52 32.269,-4.442c2.626,-0.521 9.37,-1.886 12.822,-3.722c0.655,-0.348 1.315,-0.75 1.798,-1.313l0,-198.364l-792,0" />*/}
		                    {/*</svg>*/}

                        </svg>

	                    <PageHeaderTitle className="animated fadeInDown slow">{this.props.title}</PageHeaderTitle>

                    </PagerHeaderWrapper>
                </Hidden>
            </React.Fragment>
        )
    }
}