const initialState = {
    cityName: '',
    current: {},
    forecasts: [],
    limit: 5,
};

const weather = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_WEATHER':
            return {
                ...state,
                cityName: action.weatherData.cityName,
                current: action.weatherData.current,
                forecasts: action.weatherData.forecast,
            };

        case 'CHANGE_LIMIT':
            return {
                ...state,
                limit: action.limit,
            };

        default:
          return state
      }
};

export default weather;
