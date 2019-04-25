import React, {Component} from 'react';
import styled from 'styled-components';
import {brandPrimary, Inlay, LoadingPlaceholder} from '../theme';
import {Section, SectionTitle} from '../theme';
import { Helmet } from 'react-helmet';
import PageHeader from '../layout/header/PageHeader';
import pageHeaderImage from '../../assets/images/header_background_3.jpg';
import * as WordpressService from '../common/wordpressService';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import Grid from '@material-ui/core/Grid';

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

class Partner extends Component {

    constructor(props) {
        super(props);

        this.state = { partnerEntries: [], loading: false};
    }


    componentDidMount() {
        this.setState({loading: true});

        WordpressService.loadPartner(this.props.language).then(response => {
            this.setState({
                partnerEntries : response.data,
                loading: false
            })
        });
    }

    render() {
        if(this.state.loading){
            return (
                <React.Fragment>
                    <Helmet>
                        <title>Partner</title>
                        <meta name="Description" content="Partner, Highland Dancing Basel" />
                    </Helmet>
                    <FormattedMessage id={"navigation.partner"}>
                        {title => (
                            <PageHeader imageUrl={pageHeaderImage} title={title}/>
                        )}
                    </FormattedMessage>
                    <LoadingPlaceholder/>
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                <Helmet>
                    <title>Partner</title>
                    <meta name="Description" content="Partner, Highland Dancing Basel" />
                </Helmet>
                <FormattedMessage id={"navigation.partner"}>
                    {title => (
                        <PageHeader imageUrl={pageHeaderImage} title={title}/>
                    )}
                </FormattedMessage>
                <Section even>
                    <Inlay>
                        <SectionTitle>
                            <FormattedMessage id={"navigation.partner"}/>
                        </SectionTitle>
                        <Grid container spacing={32} justify={'flex-start'}>
                            {this.state.partnerEntries.map((clazz, index) => <div>Test {index}</div>)}
                        </Grid>
                    </Inlay>
                </Section>
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps)(Partner);