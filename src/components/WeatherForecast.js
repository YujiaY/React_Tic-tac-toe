import React from 'react';
import { format } from 'date-fns';

import ForecastRow from './ForecastRow';

class WeatherForecast extends React.Component {
	render() {
		return (
			<section className="weather-forecast">
				<div className="forecast__switch">
					<button className="forecast__switch_0 switch-active">5 items</button>
					<button className="forecast__switch_1">10 items</button>
				</div>
				{this.props.forecasts.map(forecast => {
					const date = new Date(forecast.time);
					const day = format(date, 'EEE');
					const time = format(date, 'HH:mm');

					return (
						<ForecastRow
							key={forecast.time}
							day={day}
							high={forecast.maxCelsius}
							low={forecast.minCelsius}
							time={time}
						/>
					);
				})}
			</section>
		);
	}
}

export default WeatherForecast;
