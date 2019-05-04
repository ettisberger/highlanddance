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

class About extends Component {
  constructor(props) {
    super(props);

    this.state = { aboutEntries: [], loading: false };
  }


  componentWillMount() {
    this.setState({ loading: true });

    WordpressService.loadAbout(this.props.language).then((response) => {
      this.setState({
        aboutEntries: response.data,
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
            <title>Home</title>
            <meta name="Description" content="Über uns, About, Highland Dancing Basel" />
          </Helmet>
          <FormattedMessage id="navigation.about">
            {title => (<PageHeader imageUrl={pageHeaderImage} title={title} />)}
          </FormattedMessage>
          <LoadingPlaceholder />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Helmet>
          <title>About</title>
          <meta name="Description" content="Über uns, About, Highland Dancing Basel" />
        </Helmet>
        <FormattedMessage id="navigation.about">
          {title => (<PageHeader imageUrl={pageHeaderImage} title={title} />)}
        </FormattedMessage>
        { this.state.aboutEntries.map((aboutEntry, index) =>
          <Section even={index % 2 === 0} odd={index % 2 !== 0} key={aboutEntry.title}>
            <Inlay>
              <SectionTitle>{aboutEntry.title}</SectionTitle>
              <Text dangerouslySetInnerHTML={{ __html: aboutEntry.content }} />
            </Inlay>
          </Section>
        )}
      </React.Fragment>
    );
  }
}

About.propTypes = {
  language: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(About);
