import React from 'react';
import { connect } from 'react-redux';

import compass from '../assets/icons/icon-compass.png';
import umberella from '../assets/icons/icon-umberella.png';
import wind from '../assets/icons/icon-wind.png';

function WeatherCondition(props) {
	return (
		<section className="weather-condition">
			<div className="weather-condition__location">{props.cityName}</div>
			<div className="weather-condition__temp">
				{props.unit === 'c' ? props.current.maxCelsius : props.current.maxFahrenheit} {props.unit}
			</div>
			<div className="weather-condition__desc">
				<div>
					<img src={umberella} />
					<span className="citem">{props.current.humidity}%</span>
				</div>
				<div>
					<img src={wind} />
					<span className="citem">{props.current.windSpeed} km/h</span>
				</div>
				<div>
					<img src={compass} />
					<span className="citem">{props.current.windDirection}</span>
				</div>
			</div>
		</section>
	);
}

const mapStateToProps = state => ({
	cityName: state.weather.cityName,
	current: state.weather.current,
	unit: state.navigation.unit,
});

export default connect(
	mapStateToProps,
)(WeatherCondition);
