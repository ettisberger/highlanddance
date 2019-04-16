import React, {Component} from 'react';
import {brandPrimary, brandSecondary, whiteColor} from '../theme';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import connect from 'react-redux/es/connect/connect';

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

const mapStateToProps = function(state){
	return {
		language: state.language,
	}
}

class DayElement extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const day = this.props.day.getDate().toString().padStart(2, '0');
		const dayOfWeek = this.props.day.toLocaleString(this.props.language, {  weekday: 'short' });

		return (
			<Grid item xs={4}>
				<DayElementContainer onClick={this.props.onClick}>
					<Month>{dayOfWeek}</Month>
					<Day>{day}</Day>
				</DayElementContainer>
			</Grid>
		)
	}
}

export default connect(mapStateToProps)(DayElement);
