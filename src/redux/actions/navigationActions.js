import { getWeatherFor } from '../../utils/axios';
import {
    fetchWeather,
    fetchWeatherFailure,
    fetchWeatherSuccess,
} from './weatherActions';

export const setSearchValue = value => ({
    value,
    type: 'SET_SEARCH_VALUE',
});

export const toggleUnit = () => ({
    type: 'TOGGLE_UNIT',
});

export const loadWeather = city => (dispatch, getState) => {
    dispatch(fetchWeather());

    return getWeatherFor(city)
        .then(data => dispatch(fetchWeatherSuccess(data)))
        .catch(error => dispatch(fetchWeatherFailure(error)));
};
