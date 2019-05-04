import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import connect from 'react-redux/es/connect/connect';
import * as PropTypes from 'prop-types';
import { brandPrimary, brandSecondary, whiteColor } from '../theme';

const DayElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  background-color: ${brandSecondary};
  color: ${whiteColor};
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${brandPrimary};
  }
`;

const Month = styled.div`
  text-transform: uppercase;
  font-size: 24px;
  padding: 10px;
  font-weight: bold;
`;

const Day = styled.div`
  font-size: 24px;
`;

const mapStateToProps = state => ({
  language: state.language,
});

// eslint-disable-next-line react/prefer-stateless-function
class DayElement extends Component {
  render() {
    const day = this.props.day.getDate().toString().padStart(2, '0');
    const dayOfWeek = this.props.day.toLocaleString(this.props.language, { weekday: 'short' });

    return (
      <Grid item xs={6} sm={4}>
        <DayElementContainer onClick={this.props.onClick}>
          <Month>{dayOfWeek}</Month>
          <Day>{day}</Day>
        </DayElementContainer>
      </Grid>
    );
  }
}

DayElement.propTypes = {
  language: PropTypes.string.isRequired,
  day: PropTypes.instanceOf(Date).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(DayElement);
