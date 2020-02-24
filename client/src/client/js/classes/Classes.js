import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import * as PropTypes from 'prop-types';
import { brandPrimary, Inlay, LoadingPlaceholder, Section, SectionTitle } from '../theme';
import PageHeader from '../layout/header/PageHeader';
import pageHeaderImage from '../../assets/images/header_background_3.jpg';
import * as WordpressService from '../common/wordpressService';
import MonthElement from './MonthElement';

const Text = styled.p`
  line-height: 1.4;
  
  a {
    color: ${brandPrimary};
  }
`;

const ClassesList = styled(Grid)`
  
`;

const mapStateToProps = function (state) {
  return {
    language: state.language,
  };
};

class Classes extends Component {
  constructor(props) {
    super(props);

    this.state = { classesEntries: [], informationEntries: [], loading: false };
  }


  componentDidMount() {
    this.setState({ loading: true });

    WordpressService.loadClasses(this.props.language).then((response) => {
      this.setState({
        classesEntries: response.data.classes.class_calendar,
        informationEntries: response.data.information.class_information,
        loading: false,
      });
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <React.Fragment>
          <FormattedMessage id="navigation.classes">
            {(title) => (
              <Helmet>
                <title>{title}</title>
                <meta name="Stunden - Highland Dancing Basel"
                      content="Erhalten Sie eine Übersicht über unsere aktuellen Stunden und Kurse von Highland Dancing Basel."/>
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
        <FormattedMessage id="navigation.classes">
          {(title) => (
            <Helmet>
              <title>{title}</title>
              <meta name="Stunden - Highland Dancing Basel"
                    content="Erhalten Sie eine Übersicht über unsere aktuellen Stunden und Kurse von Highland Dancing Basel."/>
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
              <FormattedMessage id="navigation.classes"/>
            </SectionTitle>
            <ClassesList container spacing={8} justify="flex-start">
              {this.state.classesEntries.map((clazz, index) => <MonthElement
                month={clazz}
                key={index}
              />)}
            </ClassesList>
          </Inlay>
        </Section>
        {this.state.informationEntries.map((informationEntry, index) =>
          <Section even={index % 2 === 0} odd={index % 2 !== 0} key={index}>
            <Inlay>
              <SectionTitle>{informationEntry.title}</SectionTitle>
              <Text dangerouslySetInnerHTML={{ __html: informationEntry.content }}/>
            </Inlay>
          </Section>
        )}
      </React.Fragment>
    );
  }
}

Classes.propTypes = {
  language: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Classes);
