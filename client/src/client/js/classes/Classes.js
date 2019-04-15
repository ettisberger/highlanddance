import React, {Component} from 'react';
import styled from 'styled-components';
import {brandPrimary, Inlay, LoadingPlaceholder} from '../theme';
import {Section, SectionTitle} from '../theme';
import { Helmet } from 'react-helmet';
import PageHeader from '../layout/header/PageHeader';
import pageHeaderImage from '../../assets/images/header_background_4.jpg';
import * as WordpressService from '../common/wordpressService';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import Grid from '@material-ui/core/Grid';
import MonthElement from './MonthElement';

const Text = styled.p`
  line-height: 1.4;
  
  a {
    color: ${brandPrimary};
  }
`;

const ClassesList = styled(Grid)`
  
`;

const mapStateToProps = function(state){
    return {
        language: state.language,
    }
}

class Classes extends Component {

    constructor(props) {
        super(props);

        this.state = { classesEntries: [], loading: false};
    }


    componentDidMount() {
        this.setState({loading: true});

        WordpressService.loadClasses(this.props.language).then(response => {
            this.setState({
                classesEntries : response.data,
                loading: false
            })
        });
    }

    render() {
        if(this.state.loading){
            return (
                <React.Fragment>
                    <Helmet>
                        <title>Classes</title>
                        <meta name="Description" content="Stunden, Classes, Highland Dancing Basel" />
                    </Helmet>
                    <FormattedMessage id={"navigation.classes"}>
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
                    <title>Classes</title>
                    <meta name="Description" content="Stunden, Classes, Highland Dancing Basel" />
                </Helmet>
                <FormattedMessage id={"navigation.classes"}>
                    {title => (
                        <PageHeader imageUrl={pageHeaderImage} title={title}/>
                    )}
                </FormattedMessage>
                {/*{ this.state.classesEntries.map((classesEntry, index) =>*/}
                {/*    <Section even={index % 2 == 0} odd={index % 2 != 0} key={index}>*/}
                {/*        <Inlay>*/}
                {/*            <SectionTitle>{classesEntry.title}</SectionTitle>*/}
                {/*            <Text dangerouslySetInnerHTML={{__html: classesEntry.content}}></Text>*/}
                {/*        </Inlay>*/}
                {/*    </Section>*/}
                {/*)}*/}
                <Section even>
                    <Inlay>
                        <SectionTitle>
                            <FormattedMessage id={"navigation.classes"}/>
                        </SectionTitle>
                        <ClassesList container spacing={32} justify={'flex-start'}>
                            {this.state.classesEntries.map((clazz, index) => <MonthElement month={clazz} key={index}/>)}
                        </ClassesList>
                    </Inlay>
                </Section>
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps)(Classes);