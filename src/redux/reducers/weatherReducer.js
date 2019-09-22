const initialState = {
    cityName: '',
    current: {},
    forecasts: [],
    limit: 5,
};

const weather = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_WEATHER':
            console.log({ weatherData: action.weatherData })
            
            return {
                ...state,
                cityName: action.weatherData.cityName,
                current: action.weatherData.current,
                forecasts: action.weatherData.forecasts,
            };

        default:
          return state
      }
};

export default weather;
