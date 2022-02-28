import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import * as PropTypes from 'prop-types';
import { backgroundColor, brandPrimary } from '../theme';
import DaysElement from './DaysElement';

const MonthContainer = styled(Grid)`
`;

const MonthItem = styled.div`
  box-shadow: 1px 1px 1px ${brandPrimary};
  background-color: ${backgroundColor};
`;

const Month = styled.h3`
  padding: 10px;
`;

const DayDetail = styled.div`
  padding: 25px 10px 10px 10px;
`;

const MontDayContainer = styled(Grid)`
  padding: 10px;
`;

class MonthElement extends Component {
  constructor(props) {
    super(props);

    this.state = { clickedDay: undefined, showDayDetail: false };
  }

  static getDateAsString(day) {
    const dayDate = new Date(day);
    return `(${dayDate.getDate()}.${dayDate.getMonth() + 1}.${dayDate.getFullYear()})`;
  }

  clickedDay = (day) => {
    this.setState({ clickedDay: day, showDayDetail: true });
  }

  groupBy = (list) => {
    const map = new Map();
    list.forEach((item) => {
      const key = new Date(item.day).toLocaleString(this.props.language, { weekday: 'short' });
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }

  getMonth = (month) => {
    const dynamicProps = { id: `months.${month.value}` };

    return (<FormattedMessage {...dynamicProps}/>);
  };

  render() {

    const dateMap = this.groupBy(this.props.month.days);

    const dayContainerElements = () => {
      const elements = [];

      dateMap.forEach((value, key) => {
        // eslint-disable-next-line react/no-array-index-key
        elements.push(<DaysElement month={this.props.month}
                                   days={value}
                                   key={key}
                                   clickedDay={this.clickedDay}
                                   />);
      })

      return elements;
    }

    return (
      <MonthContainer item xs={12} sm={6}>
        <MonthItem>
          <Month>{this.getMonth(this.props.month.month[0])}</Month>
          <MontDayContainer container justifyContent="space-around">
            {dayContainerElements()}
          </MontDayContainer>
          <DayDetail hidden={!this.state.showDayDetail}>
            <FormattedMessage id="text.description"/>
            {' '}
            {this.state.clickedDay ? `${MonthElement.getDateAsString(this.state.clickedDay.day)} ${this.state.clickedDay.description[this.props.language]}` : ''}
          </DayDetail>
        </MonthItem>
      </MonthContainer>
    );
  }
}

MonthElement.propTypes = {
  month: PropTypes.shape(
    {
      month: PropTypes.array.isRequired,
    }
  ).isRequired,
};

export default MonthElement;
