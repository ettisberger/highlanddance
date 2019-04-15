import React, {Component} from 'react';
import styled from 'styled-components';
import {brandPrimary, Inlay, LoadingPlaceholder} from '../theme';
import {Section, SectionTitle} from '../theme';
import { Helmet } from 'react-helmet';
import PageHeader from '../layout/header/PageHeader';
import pageHeaderImage from '../../assets/images/header_background_5.jpg';
import {connect} from 'react-redux';
import * as WordpressService from '../common/wordpressService';

const Text = styled.p`
  line-height: 1.4;
  
  a {
    color: ${brandPrimary};
  }
`;

const mapStateToProps = function(state){
    return {
        language: state.language,
    }
}

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = { homeEntries: [], loading: false};
    }


    componentDidMount() {
        this.setState({loading: true});

        WordpressService.loadHome(this.props.language).then(response => {
           this.setState({
               homeEntries : response.data,
               loading: false
           })
        });
    }

    render() {

        if(this.state.loading){
            return (
                <React.Fragment>
                    <Helmet>
                        <title>Home</title>
                        <meta name="Description" content="Startseite, Home, Highland Dancing Basel" />
                    </Helmet>
                    <PageHeader imageUrl={pageHeaderImage} title={'School of Highland Dancing Basel'}/>
                    <LoadingPlaceholder/>
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                <Helmet>
                    <title>Home</title>
                    <meta name="Description" content="Startseite, Home, Highland Dancing Basel" />
                </Helmet>
                <PageHeader imageUrl={pageHeaderImage} title={'School of Highland Dancing Basel'}/>

                { this.state.homeEntries.map((homeEntry, index) =>
                    <Section even={index % 2 == 0} odd={index % 2 != 0} key={index}>
                        <Inlay>
                            <SectionTitle>{homeEntry.title}</SectionTitle>
                            <Text dangerouslySetInnerHTML={{__html: homeEntry.content}}></Text>
                        </Inlay>
                    </Section>
                )}
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps)(Home);