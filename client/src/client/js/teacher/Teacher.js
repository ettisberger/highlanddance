import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import * as PropTypes from 'prop-types';
import theme, { brandPrimary, Inlay, LoadingPlaceholder, Section, SectionTitle } from '../theme';

import PageHeader from '../layout/header/PageHeader';
import pageHeaderImage from '../../assets/images/header_background_teacher.jpg';
import * as WordpressService from '../common/wordpressService';

const Text = styled.p`
  line-height: 1.4;
  
  a {
    color: ${brandPrimary};
  }
  
  img {
  
    &.floatright {
      ${theme.breakpoints.up('sm')}{
        float: right;
        margin: 2rem;
      }
    }
    
    &.floatleft {
      ${theme.breakpoints.up('sm')}{
        float: left;
        margin: 2rem;
      }
    }
  }
`;

const mapStateToProps = function (state) {
  return {
    language: state.language,
  };
};

class Teacher extends Component {
  constructor(props) {
    super(props);

    this.state = { teacherEntries: [], loading: false };
  }


  componentDidMount() {
    this.setState({ loading: true });

    WordpressService.loadTeacher(this.props.language).then((response) => {
      this.setState({
        teacherEntries: !Object.keys(response.data).length ? [] : response.data,
        loading: false,
      });
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <React.Fragment>
          <Helmet>
            <title>Teacher</title>
            <meta name="Tanzlehrerin - Highland Dancing Basel" content="Carol ist Mitgliederin der Scottish Dance Teachers‘ Association, einer von drei Vereinen, der vom Scottish Official Board of Highland Dancing anerkannt ist." />
          </Helmet>
          <FormattedMessage id="navigation.teacher">
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
          <title>Teacher</title>
          <meta name="Tanzlehrerin - Highland Dancing Basel" content="Carol ist Mitgliederin der Scottish Dance Teachers‘ Association, einer von drei Vereinen, der vom Scottish Official Board of Highland Dancing anerkannt ist." />
        </Helmet>
        <FormattedMessage id="navigation.teacher">
          {title => (
            <PageHeader imageUrl={pageHeaderImage} title={title}/>
          )}
        </FormattedMessage>
        {this.state.teacherEntries.map((teacherEntry, index) =>
          <Section even={index % 2 === 0} odd={index % 2 !== 0} key={teacherEntry.title[this.props.language]}>
            <Inlay>
              <SectionTitle>{teacherEntry.title[this.props.language]}</SectionTitle>
              <Text dangerouslySetInnerHTML={{ __html: teacherEntry.content[this.props.language] }}/>
            </Inlay>
          </Section>
        )}
      </React.Fragment>
    );
  }
}

Teacher.propTypes = {
  language: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Teacher);
