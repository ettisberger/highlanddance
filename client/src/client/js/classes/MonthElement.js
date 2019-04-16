import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import DayElement from './DayElement.js';
import {brandPrimary, backgroundColor} from '../theme';
import {FormattedMessage} from 'react-intl';

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

		this.state = {clickedDay: undefined, showDayDetail: false};
	}

	clickedDay = (day) => {
		this.setState({clickedDay: day, showDayDetail: true});
	}

	getDateAsString(day) {
		console.log(day);
		var day = new Date(day);
		return "(" + day.getDate() + "." + (day.getMonth() + 1) + "." + day.getFullYear() +")";
	}

	render() {
		return (
			<MonthContainer item xs={12} sm={6} >
				<MonthItem>
					<Month>{this.props.month.month[0].label}</Month>
					<Grid container justify={'center'} spacing={32}>
						{ this.props.month.days.map( (day, index) =>
							<DayElement month={this.props.month.month} day={new Date(day.day)} key={index} onClick={() => this.clickedDay(day)}/>
						) }
					</Grid>
					<DayDetail hidden={!this.state.showDayDetail}><FormattedMessage id="text.description"/> {this.state.clickedDay ? this.getDateAsString(this.state.clickedDay.day) + " " + this.state.clickedDay.description : ""}</DayDetail>
				</MonthItem>
			</MonthContainer>
		)
	}
}

export default MonthElement;
