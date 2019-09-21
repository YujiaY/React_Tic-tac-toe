import axios from 'axios';

export const getWeatherFor = city => {
    return axios(`https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=${city}`)
        .then(res => res.data.data);
}