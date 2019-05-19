import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import PageHeader from '../layout/header/PageHeader';
import pageHeaderImage from '../../assets/images/header_background_3.jpg';
import * as WordpressService from '../common/wordpressService';
import { Inlay, LoadingPlaceholder, Section, SectionTitle } from '../theme';
import GridGallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const mapStateToProps = function (state) {
  return {
    language: state.language,
  };
};

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = { galleryEntries: [], loading: false, currentImage: 0 };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
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

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    const photos = this.state.galleryEntries.map(image => ({ src: image.url, width: image.width, height: image.height }));

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
            <GridGallery photos={photos} onClick={this.openLightbox} />
            <Lightbox
              images={photos}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            />
          </Inlay>
        </Section>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Gallery);
