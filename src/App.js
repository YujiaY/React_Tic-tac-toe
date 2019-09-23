import React from 'react';
import { connect } from 'react-redux';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import {
	loadWeather as loadWeatherAction,
} from './redux/actions/navigationActions';

import './App.css';

class App extends React.Component {
	componentDidMount() {
		this.props.loadWeather('Brisbane');
	}

	render() {
		return (
			<div className="weather-channel__container">
				<Header />
				<Navigation />
				<Main />
				<Footer />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	loadWeather: city => dispatch(loadWeatherAction(city)),
});

export default connect(
	null,
	mapDispatchToProps
)(App);
