import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import connect from 'react-redux/es/connect/connect';
import DayElement from './DayElement';

const mapStateToProps = state => ({
  language: state.language,
});

// eslint-disable-next-line react/prefer-stateless-function
class DaysElement extends Component {
  render() {
    return (
      <Grid container item xs={6} sm={5} spacing={8} direction="column">
        {this.props.days.map((day, index) =>
          <DayElement
            month={this.props.month.month}
            day={new Date(day.day)}
            key={index}
            onClick={() => this.props.clickedDay(day)}
            hasSpecialNote={day.description !== ''}
          />
        )}
      </Grid>
    );
  }
}

DaysElement.propTypes = {
  // language: PropTypes.string.isRequired,
  // day: PropTypes.instanceOf(Date).isRequired,
};

export default connect(mapStateToProps)(DaysElement);
