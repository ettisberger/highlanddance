import React, {Component} from 'react';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import * as PropTypes from 'prop-types';
import {brandPrimary, Inlay, LoadingPlaceholder, Section, SectionTitle} from '../theme';

import PageHeader from '../layout/header/PageHeader';
import pageHeaderImage from '../../assets/images/header_background_about.jpg';
import * as WordpressService from '../common/wordpressService';

const Text = styled.p`
  line-height: 1.4;

  a {
    color: ${brandPrimary};
  }
`;

const mapStateToProps = function (state) {
    return {
        language: state.language,
    };
};

class Dancing extends Component {
    constructor(props) {
        super(props);

        this.state = {dancingEntries: [], loading: false};
    }


    componentDidMount() {
        this.setState({loading: true});

        WordpressService.loadDancing(this.props.language).then((response) => {
            this.setState({
                dancingEntries: response.data,
                loading: false,
            });
        });
    }

    render() {
        if (this.state.loading) {
            return (
                <React.Fragment>
                    <Helmet>
                        <title>Home</title>
                        <meta name="Highland Dancing Basel"
                              content="Highland Dancing stammt aus Schottland und ist eine herausfordende Tanzart, welche viel Kraft, Koordination und Disziplin benötigt. Ursprünglich war es Fitness Training für schottischen Soldaten und war ausschliesslich für Männer bestimmt."/>
                    </Helmet>
                    <FormattedMessage id="navigation.dancing">
                        {title => (<PageHeader imageUrl={pageHeaderImage} title={title}/>)}
                    </FormattedMessage>
                    <LoadingPlaceholder/>
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
                <Helmet>
                    <title>About</title>
                    <meta name="Über uns - Highland Dancing Basel"
                          content="Highland Dancing stammt aus Schottland und ist eine herausfordende Tanzart, welche viel Kraft, Koordination und Disziplin benötigt. Ursprünglich war es Fitness Training für schottischen Soldaten und war ausschliesslich für Männer bestimmt."/>
                </Helmet>
                <FormattedMessage id="navigation.dancing">
                    {title => (<PageHeader imageUrl={pageHeaderImage} title={title}/>)}
                </FormattedMessage>
                {this.state.dancingEntries.map((aboutEntry, index) =>
                    <Section even={index % 2 === 0} odd={index % 2 !== 0} key={aboutEntry.title[this.props.language]}>
                        <Inlay>
                            <SectionTitle>{aboutEntry.title[this.props.language]}</SectionTitle>
                            <Text dangerouslySetInnerHTML={{__html: aboutEntry.content[this.props.language]}}/>
                        </Inlay>
                    </Section>
                )}
            </React.Fragment>
        );
    }
}

Dancing.propTypes = {
    language: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Dancing);
