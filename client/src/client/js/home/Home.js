import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { brandPrimary, Inlay, LoadingPlaceholder, Section, SectionTitle } from '../theme';
import PageHeader from '../layout/header/PageHeader';
import pageHeaderImage from '../../assets/images/header_background_home.jpg';
import * as WordpressService from '../common/wordpressService';
import * as PropTypes from 'prop-types';

const Text = styled.p`
  line-height: 1.4;
  
  a {
    color: ${brandPrimary};
  }
`;

const mapStateToProps = state => ({ language: state.language });

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { homeEntries: [], loading: false };
  }


  componentDidMount() {
    this.setState({ loading: true });

    WordpressService.loadHome(this.props.language).then((response) => {
      this.setState({
        homeEntries: response.data,
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
            <meta name="Startseite - Highland Dancing Basel" content="Willkommen auf der Webseite von Highland Dancing Basel." />
          </Helmet>
          <PageHeader imageUrl={pageHeaderImage} title="School of Highland Dancing Basel" />
          <LoadingPlaceholder />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Helmet>
          <title>Home</title>
          <meta name="Startseite - Highland Dancing Basel" content="Willkommen auf der Webseite von Highland Dancing Basel." />
        </Helmet>
        <PageHeader imageUrl={pageHeaderImage} title="School of Highland Dancing Basel" />

        {this.state.homeEntries.map((homeEntry, index) =>
          <Section even={index % 2 === 0} odd={index % 2 !== 0} key={homeEntry.title[this.props.language]}>
            <Inlay>
              <SectionTitle>{homeEntry.title[this.props.language]}</SectionTitle>
              <Text dangerouslySetInnerHTML={{ __html: homeEntry.content[this.props.language] }} />
            </Inlay>
          </Section>
        )}
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  language: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Home);
