import React from 'react';
import { connect } from 'react-redux';

import WeatherCondition from './WeatherCondition';
import WeatherForecast from './WeatherForecast';

function Main(props) {
	return (
		<main>
			<WeatherCondition
				cityName={props.cityName}
				current={props.current}
			/>
			<WeatherForecast
				forecasts={props.forecasts}
				handleChangeLimit={props.handleChangeLimit}
				limit={props.limit}
			/>
		</main>
	);
}

const mapStateToProps = state => ({
	cityName: state.weather.cityName,
	current: state.weather.current,
	forecasts: state.weather.forecasts,
	limit: state.weather.limit,
});

export default connect(
	mapStateToProps,
)(Main);
