import React, {Component} from 'react';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import * as PropTypes from 'prop-types';
import {brandPrimary, Inlay, LoadingPlaceholder, Section, SectionTitle} from '../theme';
import PageHeader from '../layout/header/PageHeader';
import pageHeaderImage from '../../assets/images/header_background_classes.jpg';
import * as WordpressService from '../common/wordpressService';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {Alert} from "@mui/material";

const Text = styled.p`
  line-height: 1.4;

  a {
    color: ${brandPrimary};
  }
`;

const DayPickerWrapper = styled.div`
  text-align: center;
`;

const DayPickerContainer = styled.div`
  display: inline-block;
`;

const modifiersStyles = {
    special: {
        color: 'red',
        backgroundColor: brandPrimary,
    },
    selected: {
        color: 'white',
        backgroundColor: brandPrimary,
    }
};

const mapStateToProps = function (state) {
    return {
        language: state.language,
    };
};

class Classes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classesEntries: [],
            informationEntries: [],
            selectedDays: [],
            modifiedDays: [],
            descriptions: new Map(),
            currentDayDescription: "",
            loading: false
        };
    }


    componentDidMount() {
        this.setState({loading: true});

        WordpressService.loadClasses(this.props.language).then((response) => {
            this.setState({
                classesEntries: response.data.classes.class_calendar,
                informationEntries: response.data.information.class_information,
                selectedDays: this.getSelectedDays(response.data.classes.class_calendar),
                modifiedDays: this.getModifiedDays(response.data.classes.class_calendar, this.getDescriptions(response.data.classes.class_calendar), this.props.language),
                descriptions: this.getDescriptions(response.data.classes.class_calendar),
                loading: false,
            });
        });
    }

    getSelectedDays(months) {
        const selectedDays = [];
        months.forEach(month => {
            const days = month.days;
            days.forEach(day => {
                selectedDays.push(new Date(day.day))
            })
        })
        return selectedDays;
    }

    getModifiedDays(months, descriptions, language) {
        const modifiedDays = {};
        const specialDays = [];
        modifiedDays.special = specialDays;
        months.forEach(month => {
            const days = month.days;
            days.forEach(day => {
                const singleDay = new Date(day.day);
                const descriptionText = descriptions.get(singleDay.toDateString())[language];

                if (descriptionText && descriptionText.length > 0) {
                    specialDays.push(singleDay);
                }
            })
        })
        return modifiedDays;
    }

    getDescriptions(months) {
        const descriptions = new Map();
        months.forEach(month => {
            const days = month.days;
            days.forEach(day => {
                descriptions.set(new Date(day.day).toDateString(), day.description)
            })
        })
        return descriptions;
    }

    selectedDay(day, language) {
        const dayDescription = this.state.descriptions.get(day.toDateString());

        this.setState({
            currentDayDescription: dayDescription ? dayDescription[language] : ""
        })
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

        // const selectedDays = this.getSelectedDays(this.state.classesEntries);
        // const modifiedDays = this.getModifiedDays(this.state.classesEntries);

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
                        <DayPickerWrapper>
                            {
                                /**
                                 * Don't need this as soon as v8 of the react day picker is released
                                 * It is a bug that outside days get styled
                                 */
                            }
                            <style>{`
                                  .DayPicker-Day--special {
                                    background-color: #1d7091 !important;
                                    &:hover {
                                      background-color: transparent !important;
                                    }
                                  }
                                  
                                .DayPicker-Day--outside {
                                    background-color: transparent !important;
                                    &:hover {
                                      background-color: transparent !important;
                                    }
                                  }
                                 `}
                            </style>
                            <DayPickerContainer>
                                <DayPicker numberOfMonths={3}
                                           canChangeMonth={false}
                                           selectedDays={this.state.selectedDays}
                                           onDayClick={(day) => this.selectedDay(day, this.props.language)}
                                           modifiers={this.state.modifiedDays}
                                           modifiersStyles={modifiersStyles}
                                           showOutsideDays={false}/>
                                <FormattedMessage id="error.NO_DAY_SELECTED">
                                    {title => (
                                        <Alert severity="info">
                                            {this.state.currentDayDescription ? this.state.currentDayDescription : title}
                                        </Alert>
                                    )}
                                </FormattedMessage>
                            </DayPickerContainer>
                        </DayPickerWrapper>
                    </Inlay>
                </Section>
                {this.state.informationEntries.map((informationEntry, index) =>
                    <Section even={index % 2 === 0} odd={index % 2 !== 0} key={index}>
                        <Inlay>
                            <SectionTitle>{informationEntry.title[this.props.language]}</SectionTitle>
                            <Text dangerouslySetInnerHTML={{__html: informationEntry.content[this.props.language]}}/>
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
