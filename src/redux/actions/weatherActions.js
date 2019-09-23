export const updateWeather = weatherData => ({
    weatherData,
    type: 'UPDATE_WEATHER',
});

export const changeLimit = limit => ({
    limit,
    type: 'CHANGE_LIMIT',
});
