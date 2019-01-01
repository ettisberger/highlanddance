import React, {Component} from 'react';
import styled from 'styled-components';
import {brandPrimary, Inlay} from '../theme';
import {Section, SectionTitle} from '../theme';
import { Helmet } from 'react-helmet';
import PageHeader from '../layout/header/PageHeader';
import pageHeaderImage from '../../assets/images/header_background_1.jpg';

const Text = styled.p`
  line-height: 1.4;
  
  a {
    color: ${brandPrimary};
  }
`;

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Highland Dancing Basel</title>
                    <meta name="Description" content="<FILL ME IN>" />
                </Helmet>
                <PageHeader imageUrl={pageHeaderImage} title={'Highland Dancing Basel'}/>
                <Section even>
                    <Inlay>
                        <SectionTitle>Highland Dancing Basel</SectionTitle>
                        <Text>
                            aasdasdasdasdasdasdasdas
                        </Text>
                    </Inlay>
                </Section>
            </React.Fragment>
        )
    }
}