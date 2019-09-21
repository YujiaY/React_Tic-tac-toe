import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import { getWeatherFor } from './utils/axios';

import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cityName: '',
			current: {},
			forecasts: [],
			input: '',
			limit: 5,
		};
	}

	componentDidMount() {
		getWeatherFor('brisbane').then(this.updateData);
	}

	handleChangeLimit = limit => {
		this.setState({ limit });
	}

	handleInputChange = event => {
		this.setState({ input: event.target.value })
	}

	updateData = data => {
		const cityName = data.city.name;
		const current = data.current;
		const forecasts = data.forecast.slice(0, 10);
		this.setState({ cityName, current, forecasts });
	}

	handleSearch = () => {
		getWeatherFor(this.state.input).then(this.updateData);
	}

	render() {
		return (
			<div className="weather-channel__container">
				<Header />
				<Navigation
					handleInputChange={this.handleInputChange}
					handleSearch={this.handleSearch}
					input={this.state.input}
				/>
				<Main
					cityName={this.state.cityName}
					current={this.state.current}
					forecasts={this.state.forecasts}
					handleChangeLimit={this.handleChangeLimit}
					limit={this.state.limit}
				/>
				<Footer />
			</div>
		);
	}
}

export default App;
