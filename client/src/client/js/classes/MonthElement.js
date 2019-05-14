import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import * as PropTypes from 'prop-types';
import DayElement from './DayElement';
import { backgroundColor, brandPrimary } from '../theme';

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

  render() {
    return (
      <MonthContainer item xs={12} sm={6}>
        <MonthItem>
          <Month>{this.props.month.month[0].label}</Month>
          <Grid container justify="flex-start" spacing={8}>
            {this.props.month.days.map((day, index) =>
              <DayElement
                month={this.props.month.month}
                day={new Date(day.day)}
                key={index}
                onClick={() => this.clickedDay(day)}
              />
            )}
          </Grid>
          <DayDetail hidden={!this.state.showDayDetail}>
            <FormattedMessage id="text.description" />
            {' '}
            {this.state.clickedDay ? `${MonthElement.getDateAsString(this.state.clickedDay.day)} ${this.state.clickedDay.description}` : ''}
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
