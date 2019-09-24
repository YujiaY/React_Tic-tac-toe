export const fetchWeather = () => ({
    type: 'FETCH_WEATHER',
});

export const fetchWeatherSuccess = weatherData => ({
    weatherData,
    type: 'FETCH_WEATHER_SUCCESS',
});

export const fetchWeatherFailure = error => ({
    error,
    type: 'FETCH_WEATHER_FAILURE',
});

export const changeLimit = limit => ({
    limit,
    type: 'CHANGE_LIMIT',
});
