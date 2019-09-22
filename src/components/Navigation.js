import React from 'react';
import { connect } from 'react-redux';

import { getWeatherFor } from '../utils/axios';
import {
	setSearchValue as setSearchValueAction,
	toggleUnit as toggleUnitAction,
} from '../redux/actions/navigationActions';

function Navigation(props) {
	const handleSearch = () => {
		getWeatherFor(props.search).then(data => {
			// TODO: put the data to redux store
			console.log({ data });
		})
	};

	const handleKeyPress = event => {
		if (event.key === 'Enter') {
			handleSearch();
		}
	};

	return (
		<nav>
		  	<div>
				<input
					className="search-input"
					onChange={event => props.setSearchValue(event.target.value)}
					onKeyPress={handleKeyPress}
					value={props.search}
				/>
				<button className="search-btn" onClick={handleSearch}>
					<i className="fa fa-search" />
				</button>
				<button className="temp-switch" onClick={props.toggleUnit}>
					<i
						className="fa fa-thermometer-empty temp-switch__icon"
						aria-hidden="true"
					/>
					<sup>&deg;</sup>{props.unit.toUpperCase()}
				</button>
		  	</div>
		</nav>
	);
}

const mapStateToProps = state => ({
	search: state.navigation.search,
	unit: state.navigation.unit,
});

const mapDispatchToProps = dispatch => ({
	setSearchValue: value => dispatch(setSearchValueAction(value)),
	toggleUnit: () => dispatch(toggleUnitAction()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Navigation);
