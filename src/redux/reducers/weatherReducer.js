const initialState = {
    cityName: '',
    current: {},
    error: null,
    forecasts: [],
    isLoading: false,
    limit: 5,
};

const weather = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_WEATHER':
            return {
                ...state,
                error: null,
                isLoading: true,
            };

        case 'FETCH_WEATHER_SUCCESS':
            console.log(action)
            return {
                ...state,
                cityName: action.weatherData.city.name,
                current: action.weatherData.current,
                forecasts: action.weatherData.forecast,
                isLoading: false,
            };

        case 'FETCH_WEATHER_FAILURE':
            return {
                ...state,
                error: action.error,
                isLoading: false,
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
