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
			forecasts: [],
		};
	}

	componentDidMount() {
		axios('https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=brisbane')
			.then(res => {
				const forecasts = res.data.data.forecast.slice(0, 10);
				this.setState({ forecasts });
			});
	}

	render() {
		return (
			<div className="weather-channel__container">
				<Header />
				<Navigation />
				<Main forecasts={this.state.forecasts} />
				<Footer />
			</div>
		);
	}
}

export default App;
