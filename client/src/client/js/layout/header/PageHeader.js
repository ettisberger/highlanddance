import React, {Component} from 'react';
import styled from 'styled-components';
import Hidden from '@material-ui/core/Hidden'
import {whiteColor} from '../../theme';

const PageHeaderWrapper = styled.header`
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(${props => props.imageUrl});
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PageHeaderTitle = styled.h1`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 3rem;
    color: ${whiteColor};
`;

export default class PageHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <Hidden xsDown>
                    <PageHeaderWrapper imageUrl={this.props.imageUrl}>
                        <PageHeaderTitle className="animated fadeInDown slow">{this.props.title}</PageHeaderTitle>
                    </PageHeaderWrapper>
                </Hidden>
            </React.Fragment>
        )
    }
}