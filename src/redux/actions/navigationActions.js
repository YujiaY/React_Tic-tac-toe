import { getWeatherFor } from '../../utils/axios';
import { updateWeather } from './weatherActions';

export const setSearchValue = value => ({
    value,
    type: 'SET_SEARCH_VALUE',
});

export const toggleUnit = () => ({
    type: 'TOGGLE_UNIT',
});

export const loadWeather = city => (dispatch, getState) => {
    return getWeatherFor(city)
        .then(data => dispatch(updateWeather(data)));
};
