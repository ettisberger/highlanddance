import React, {Component} from 'react';
import styled from 'styled-components';
import {brandPrimary, Inlay, LoadingPlaceholder} from '../theme';
import {Section, SectionTitle} from '../theme';
import { Helmet } from 'react-helmet';
import PageHeader from '../layout/header/PageHeader';
import pageHeaderImage from '../../assets/images/header_background_4.jpg';
import WordpressService from '../common/wordpressService';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';

const Text = styled.p`
  line-height: 1.4;
  
  a {
    color: ${brandPrimary};
  }
`;

const mapStateToProps = function(state){
    return {
        language: state.language,
    }
}

const wordpressService = new WordpressService();

class Teacher extends Component {

    constructor(props) {
        super(props);

        this.state = { teacherEntries: [], loading: false};
    }


    componentDidMount() {
        this.setState({loading: true});

        wordpressService.loadTeacher(this.props.language).then(response => {
            this.setState({
                teacherEntries : response.data,
                loading: false
            })
        });
    }

    render() {
        if(this.state.loading){
            return (
                <React.Fragment>
                    <Helmet>
                        <title>Home</title>
                        <meta name="Description" content="Tanzlehrerin, Teacher, Highland Dancing Basel" />
                    </Helmet>
                    <FormattedMessage id={"navigation.teacher"}>
                        {title => (
                            <PageHeader imageUrl={pageHeaderImage} title={title}/>
                        )}
                    </FormattedMessage>
                    <LoadingPlaceholder/>
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                <Helmet>
                    <title>Teacher</title>
                    <meta name="Description" content="Tanzlehrerin, Teacher, Highland Dancing Basel" />
                </Helmet>
                <FormattedMessage id={"navigation.teacher"}>
                    {title => (
                        <PageHeader imageUrl={pageHeaderImage} title={title}/>
                    )}
                </FormattedMessage>
                { this.state.teacherEntries.map((teacherEntry, index) =>
                    <Section even={index % 2 == 0} odd={index % 2 != 0} key={index}>
                        <Inlay>
                            <SectionTitle>{teacherEntry.title}</SectionTitle>
                            <Text dangerouslySetInnerHTML={{__html: teacherEntry.content}}></Text>
                        </Inlay>
                    </Section>
                )}
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps)(Teacher);