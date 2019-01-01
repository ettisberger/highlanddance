import React, {Component} from 'react';
import styled from 'styled-components';
import Hidden from '@material-ui/core/Hidden'

const PageHeaderWrapper = styled.header`
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(${props => props.imageUrl});
`;

export default class PageHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <Hidden xsDown>
                    <PageHeaderWrapper imageUrl={this.props.imageUrl}/>
                </Hidden>
            </React.Fragment>
        )
    }
}