import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import * as PropTypes from 'prop-types';
import { brandPrimary, Inlay, LoadingPlaceholder, Section, SectionTitle } from '../theme';

import PageHeader from '../layout/header/PageHeader';
import pageHeaderImage from '../../assets/images/header_background_6.jpg';
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

class HighlandHustle extends Component {
  constructor(props) {
    super(props);

    this.state = { highlandHustleEntries: [], loading: false };
  }


  componentWillMount() {
    this.setState({ loading: true });

    WordpressService.loadHighlandHustle(this.props.language).then((response) => {
      this.setState({
        highlandHustleEntries: response.data,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
  }

  render() {
    if (this.state.loading) {
      return (
        <React.Fragment>
          <Helmet>
            <title>Highland Hustle</title>
            <meta name="Description" content="Highland Hustle, Highland Dancing Basel" />
          </Helmet>
          <FormattedMessage id="navigation.hustle">
            {title => (<PageHeader imageUrl={pageHeaderImage} title={title} />)}
          </FormattedMessage>
          <LoadingPlaceholder />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Helmet>
          <title>Highland Hustle</title>
          <meta name="Description" content="Highland Hustle, Highland Dancing Basel" />
        </Helmet>
        <FormattedMessage id="navigation.hustle">
          {title => (<PageHeader imageUrl={pageHeaderImage} title={title} />)}
        </FormattedMessage>
        { this.state.highlandHustleEntries.map((hustleEntry, index) =>
          <Section even={index % 2 === 0} odd={index % 2 !== 0} key={hustleEntry.title}>
            <Inlay>
              <SectionTitle>{hustleEntry.title}</SectionTitle>
              <Text dangerouslySetInnerHTML={{ __html: hustleEntry.content }} />
            </Inlay>
          </Section>
        )}
      </React.Fragment>
    );
  }
}

HighlandHustle.propTypes = {
  language: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(HighlandHustle);
