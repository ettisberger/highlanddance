import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import DayElement from './DayElement.js';
import {brandPrimary, backgroundColor} from '../theme';

const MonthContainer = styled(Grid)`
`;

const MonthItem = styled.div`
	box-shadow: 1px 1px 1px ${brandPrimary};
	background-color: ${backgroundColor};
`;

const Month = styled.h3`
	padding: 10px;
`;

class MonthElement extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<MonthContainer item xs={12} sm={6} >
				<MonthItem>
					<Month>{this.props.month.month.label}</Month>
					<Grid container justify={'center'} spacing={32}>
						{ this.props.month.days.map( (day, index) => <DayElement month={this.props.month.month} day={new Date(day.day)} key={index}/>) }
					</Grid>
				</MonthItem>
			</MonthContainer>
		)
	}
}

export default MonthElement;
