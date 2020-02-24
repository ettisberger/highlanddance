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
  width: 80px;
  height: 80px;
  background-color: ${brandSecondary};
  color: ${whiteColor};
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    background-color: ${brandPrimary};
  }
  
  &.special:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 22px 22px 0;
    border-color: transparent deeppink transparent transparent;
    right: 0;
    top: 0;
    position: absolute;
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
      <Grid item>
        <DayElementContainer onClick={this.props.onClick} className={this.props.hasSpecialNote ? "special" : ""}>
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
