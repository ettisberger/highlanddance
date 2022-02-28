import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import * as PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {brandPrimary, Inlay, LoadingPlaceholder, Section, SectionTitle} from '../theme';
import PageHeader from '../layout/header/PageHeader';
import pageHeaderImage from '../../assets/images/header_background_studio.jpg';
import * as WordpressService from '../common/wordpressService';
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from 'react-google-maps';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import GridGallery from "react-photo-gallery";

const Text = styled.p`
  line-height: 1.4;
  padding: 1rem 0;
`;

const Contact = styled.div`
  margin-bottom: 10px !important;
  line-height: 1.5;
`;

const mapStateToProps = function (state) {
    return {
        language: state.language,
    };
};

class Studio extends Component {
    constructor(props) {
        super(props);

        this.state = {loading: false, studioData: {}};
    }

    componentDidMount() {
        this.setState({loading: true});

        WordpressService.loadStudio().then((response) => {
            this.setState({
                studioData: response.data,
                loading: false,
            });
        });
    }

    render() {
        if (this.state.loading || JSON.stringify(this.state.studioData) === '{}') {
            return (
                <React.Fragment>
                    <FormattedMessage id="navigation.studio">
                        {title => (
                            <Helmet>
                                <title>{title}</title>
                                <meta
                                    name="Kontakt - Highland Dancing Basel"
                                    content="Kontaktieren Sie uns gerne direkt per Email."
                                />
                            </Helmet>
                        )}
                    </FormattedMessage>
                    <FormattedMessage id="navigation.classes">
                        {title => (
                            <PageHeader imageUrl={pageHeaderImage} title={title}/>
                        )}
                    </FormattedMessage>
                    <LoadingPlaceholder/>
                </React.Fragment>
            );
        }

        const photos = this.state.studioData.photos.map(photo => ({
            src: photo.url,
            width: photo.width,
            height: photo.height,
        }));

        return (
            <React.Fragment>
                <FormattedMessage id="navigation.studio">
                    {title => (
                        <Helmet>
                            <title>{title}</title>
                            <meta
                                name="Studio - Highland Dancing Basel"
                                content="Kontaktieren Sie uns gerne direkt per Email."
                            />
                        </Helmet>
                    )}
                </FormattedMessage>
                <FormattedMessage id="navigation.studio">
                    {title => (
                        <PageHeader imageUrl={pageHeaderImage} title={title}/>
                    )}
                </FormattedMessage>
                <Section even>
                    <Inlay>
                        <SectionTitle>
                            <FormattedMessage id="navigation.studio"/>
                        </SectionTitle>
                        <Contact>
                            <div>Highland Dancing Basel</div>
                            <div>Leimgrubenweg 4-6</div>
                            <div>CH-4053 Basel</div>
                        </Contact>
                    </Inlay>
                </Section>

                <Section odd>
                    <Inlay>
                        <Text dangerouslySetInnerHTML={{ __html: this.state.studioData.content[this.props.language] }} />
                        <GridGallery photos={photos} />
                        <Grid container justifyContent="center">
                            <Grid container item xs={12} sm={8} direction="column">

                            </Grid>
                            <Grid container item xs={12} sm={4} direction="column">

                            </Grid>
                        </Grid>
                    </Inlay>
                </Section>
            </React.Fragment>
        );
    }
}

Studio.propTypes = {
    language: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Studio);
