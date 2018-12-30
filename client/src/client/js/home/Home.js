import React, {Component} from 'react';
import styled from 'styled-components';
import {brandPrimary, Inlay} from '../theme';
import {Section, SectionTitle} from '../theme';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

const Flyer = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
`

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