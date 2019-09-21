import React from 'react';
import axios from 'axios';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';

import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cityName: '',
			current: {},
			forecasts: [],
			limit: 5,
		};
	}

	componentDidMount() {
		axios('https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=brisbane')
			.then(res => {
				const data = res.data.data;
				const cityName = data.city.name;
				const current = data.current;
				const forecasts = data.forecast.slice(0, 10);
				this.setState({ cityName, current, forecasts });
			});
	}

	handleChangeLimit = limit => {
		this.setState({ limit });
	}

	render() {
		return (
			<div className="weather-channel__container">
				<Header />
				<Navigation />
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
