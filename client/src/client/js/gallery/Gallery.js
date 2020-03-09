import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import GridGallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import ReactPlayer from 'react-player';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { Inlay, LoadingPlaceholder, Section } from '../theme';
import * as WordpressService from '../common/wordpressService';
import pageHeaderImage from '../../assets/images/header_background_gallery.jpg';
import PageHeader from '../layout/header/PageHeader';

const PlayerContainer = styled.div`
  &:first-of-type {
    margin-top: 0;
  }
  margin-top: 1rem;
  height: 0;
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
  overflow: hidden;
`;
const VideoPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0; 
  width: 100%;
  height: 100%;
`;

const mapStateToProps = state => ({
  language: state.language,
});

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = { galleryEntries: [], videoEntries: [], loading: false, currentImage: 0 };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  componentDidMount() {
    this.setState({ galleryEntries: [], videoEntries: [], loading: true });

    WordpressService.loadGallery(this.props.language).then((response) => {
      this.setState({
        galleryEntries: !Object.keys(response.data).length ? [] : response.data,
        loading: false,
      });
    });

    WordpressService.loadVideos(this.props.language).then((response) => {
      this.setState({
        videoEntries: !Object.keys(response.data).length ? [] : response.data,
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
    const photos = this.state.galleryEntries.map(image => ({
      src: image.url,
      width: image.width,
      height: image.height,
    }));

    if (this.state.loading) {
      return (
        <React.Fragment>
          <Helmet>
            <title>Gallerie</title>
            <meta
              name="Galerie - Highland Dancing Basel"
              content="Dies ist die Galerie von Highland Dancing Basel. Hier können Sie verschiedene Eindrücke von unseren diversen Auftritten gewinnen."
            />
          </Helmet>
          <FormattedMessage id="navigation.gallery">
            {title => (
              <PageHeader imageUrl={pageHeaderImage} title={title}/>
            )}
          </FormattedMessage>
          <LoadingPlaceholder/>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Helmet>
          <title>Gallerie</title>
          <meta
            name="Galerie - Highland Dancing Basel"
            content="Dies ist die Galerie von Highland Dancing Basel. Hier können Sie verschiedene Eindrücke von unseren diversen Auftritten gewinnen."
          />
        </Helmet>
        <FormattedMessage id="navigation.gallery">
          {title => (
            <PageHeader imageUrl={pageHeaderImage} title={title}/>
          )}
        </FormattedMessage>
        <Section even>
          <Inlay>
            <GridGallery photos={photos} onClick={this.openLightbox}/>
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

        {this.state.videoEntries.length ? (
            <Section odd>
              <Inlay>
                <Grid container wrap direction="row" spacing={6}>
                  {this.state.videoEntries.map(videoEntry =>
                    <Grid item xs={12} sm={6} key={videoEntry.video_id}>
                      <PlayerContainer>
                        <VideoPlayer
                          className="react-player"
                          url={videoEntry.video}
                          controls
                          width="100%"
                          height="100%"
                        />
                      </PlayerContainer>
                    </Grid>
                  )}
                </Grid>
              </Inlay>
            </Section>)
          : null}
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Gallery);
