import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import { Inlay, LoadingPlaceholder, Section, SectionTitle } from '../theme';

import PageHeader from '../layout/header/PageHeader';
import pageHeaderImage from '../../assets/images/header_background_3.jpg';
import * as WordpressService from '../common/wordpressService';

const mapStateToProps = function (state) {
  return {
    language: state.language,
  };
};

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = { galleryEntries: [], loading: false };
  }


  componentDidMount() {
    this.setState({ loading: true });

    WordpressService.loadGallery(this.props.language).then((response) => {
      this.setState({
        galleryEntries: response.data,
        loading: false,
      });
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <React.Fragment>
          <Helmet>
            <title>Gallerie</title>
            <meta name="Description" content="Galerie, Highland Dancing Basel" />
          </Helmet>
          <FormattedMessage id="navigation.gallery">
            {title => (
              <PageHeader imageUrl={pageHeaderImage} title={title} />
            )}
          </FormattedMessage>
          <LoadingPlaceholder />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Helmet>
          <title>Partner</title>
          <meta name="Description" content="Partner, Highland Dancing Basel" />
        </Helmet>
        <FormattedMessage id="navigation.gallery">
          {title => (
            <PageHeader imageUrl={pageHeaderImage} title={title} />
          )}
        </FormattedMessage>
        <Section even>
          <Inlay>
            <SectionTitle>
              <FormattedMessage id="navigation.gallery" />
            </SectionTitle>
            <Grid container spacing="8" justify="flex-start">
              {this.state.galleryEntries.map((clazz, index) =>
                <div>
                  Test
                {index}
              </div>)}
            </Grid>
          </Inlay>
        </Section>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Gallery);
