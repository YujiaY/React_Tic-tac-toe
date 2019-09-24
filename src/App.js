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

	renderMain() {
		if (this.props.hasError) return "Something went wrong...";

		return <Main />;
	}

	render() {
		return (
			<div className="weather-channel__container">
				<Header />
				<Navigation />
				{this.props.isLoadingWeather ? "Loading..." : this.renderMain()}
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	hasError: !!state.weather.error,
	isLoadingWeather: state.weather.isLoading,
});

const mapDispatchToProps = dispatch => ({
	loadWeather: city => dispatch(loadWeatherAction(city)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
