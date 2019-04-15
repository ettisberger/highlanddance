import React, {Component} from 'react';
import {brandSecondary, whiteColor} from '../theme';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

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
`;

const Month = styled.div`
	text-transform: uppercase;
	font-size: 16px;
	padding: 10px;
`;

const Day = styled.div`
	font-size: 24px;
	font-weight: bold;
`;

class DayElement extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const day = this.props.day.getDate().toString().padStart(2, '0');

		return (
			<Grid item xs={4}>
				<DayElementContainer>
					<Month>{this.props.month.value}</Month>
					<Day>{day}</Day>
				</DayElementContainer>
			</Grid>
		)
	}
}

export default DayElement;
