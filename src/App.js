import React from 'react';
import { connect } from 'react-redux';

import Error from './components/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import Loader from './components/Loader';
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
		if (this.props.hasError) return <Error />;

		return <Main />;
	}

	render() {
		return (
			<div className="weather-channel__container">
				<Header />
				<Navigation />
				{this.props.isLoadingWeather ? <Loader /> : this.renderMain()}
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
