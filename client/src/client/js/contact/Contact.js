import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import * as PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Inlay, LoadingPlaceholder, Section, SectionTitle } from '../theme';
import PageHeader from '../layout/header/PageHeader';
import pageHeaderImage from '../../assets/images/header_background_contact.jpg';
import * as WordpressService from '../common/wordpressService';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import styled from 'styled-components';

const Studio = styled.div`
  margin-bottom: 10px !important;
  line-height: 1.5;
`;

const mapStateToProps = function (state) {
  return {
    language: state.language,
  };
};

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: false, name: '', firstName: '', email: '', message: '' };
  }


  componentDidMount() {

  }

  sendMail = () => {
    WordpressService.sendMail(this.state.name,
      this.state.firstName,
      this.state.email,
      this.state.message).then((response) => {

      if (response.status === 200) {
        this.setState({ loading: false, name: '', firstName: '', email: '', message: '' });
      }
    });
  };

  validate = () =>
    this.state.name !== '' && this.state.firstName !== ''
    && this.state.email !== '' && this.state.message !== '';

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const isValid = this.validate();

    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
          clickableIcons={false}
          options={{ disableDefaultUI: true, draggable: false }}
          defaultZoom={15}
          defaultCenter={{ lat: 47.53724893750821, lng: 7.607319536119592 }}
        >
          <Marker position={{ lat: 47.53724893750821, lng: 7.607319536119592 }}/>
        </GoogleMap>
      ))
    ;

    if (this.state.loading) {
      return (
        <React.Fragment>
          <FormattedMessage id="navigation.contact">
            {title => (
              <Helmet>
                <title>{title}</title>
                <meta
                  name="Kontakt - Highland Dancing Basel"
                  content="Kontaktieren Sie uns gerne direkt per Email oder über das Kontaktformular."
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
    return (
      <React.Fragment>
        <FormattedMessage id="navigation.contact">
          {title => (
            <Helmet>
              <title>{title}</title>
              <meta
                name="Kontakt - Highland Dancing Basel"
                content="Kontaktieren Sie uns gerne direkt per Email oder über das Kontaktformular."
              />
            </Helmet>
          )}
        </FormattedMessage>
        <FormattedMessage id="navigation.classes">
          {title => (
            <PageHeader imageUrl={pageHeaderImage} title={title}/>
          )}
        </FormattedMessage>
        <Section even>
          <Inlay>
            <SectionTitle>
              <FormattedMessage id="navigation.contact"/>
            </SectionTitle>
            <Studio>
              <div>Highland Dancing Basel</div>
              <div>Leimgrubenweg 4-6</div>
              <div>CH-4053 Basel</div>
            </Studio>
            <MyMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAueTssaHi_q-VrNthMGcyGu2dcWZO-fvY&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }}/>}
              containerElement={<div style={{ height: `500px` }}/>}
              mapElement={<div style={{ height: `100%`, borderRadius: `1rem` }}/>}
            />
          </Inlay>
        </Section>

        <Section odd>
          <Inlay>
            <form noValidate autoComplete="on">
              <Grid container spacing={2} justifyContent="center">
                <Grid container item xs={12} sm={12} justifyContent="center">
                  <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    required
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid container item xs={12} sm={12} justifyContent="center">
                  <TextField
                    id="firstName"
                    label="Firstname"
                    variant="outlined"
                    value={this.state.firstName}
                    onChange={this.handleChange('firstName')}
                    required
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid container item xs={12} sm={12} justifyContent="center">
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    required
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid container item xs={12} sm={12} justifyContent="center">
                  <TextField
                    id="message"
                    label="Message"
                    variant="outlined"
                    value={this.state.message}
                    onChange={this.handleChange('message')}
                    required
                    margin="normal"
                    multiline
                    rows="10"
                    fullWidth
                  />
                </Grid>
                <Grid container item xs={12} justifyContent="center">
                  <Button variant="outlined"
                          color="primary"
                          onClick={() => this.sendMail()}
                          disabled={!isValid}>
                    SEND
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Inlay>
        </Section>
      </React.Fragment>
    );
  }
}

Contact.propTypes = {
  language: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Contact);
