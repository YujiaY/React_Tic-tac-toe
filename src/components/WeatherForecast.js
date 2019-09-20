import React from 'react';

import ForecastRow from './ForecastRow';

class WeatherForecast extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			forecasts: [
				{
					day: 'Mon',
					high: '10 c',
					low: '1 c',
					time: '08:00',
				},
				{
					day: 'Tus',
					high: '11 c',
					low: '2 c',
					time: '09:00',
				},
				{
					day: 'Wed',
					high: '12 c',
					low: '3 c',
					time: '10:00',
				},
			],
		};
	}

	render() {
		return (
			<section class="weather-forecast">
				<div class="forecast__switch">
					<button class="forecast__switch_0 switch-active">5 items</button>
					<button class="forecast__switch_1">10 items</button>
				</div>
				{this.state.forecasts.map(forecast => (
					<ForecastRow
						key={forecast.day + forecast.time}
						day={forecast.day}
						high={forecast.high}
						low={forecast.low}
						time={forecast.time}
					/>
				))}
			</section>
		);
	}
}

export default WeatherForecast;
