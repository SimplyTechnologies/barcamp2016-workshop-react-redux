import fetch from 'isomorphic-fetch';
import moment from 'moment';

const APIKEY = '9bd058a882b83195440533159d810f20';

function getForecastUrl(lat, lng) {
  return `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&APPID=${APIKEY}&units=metric`;
}

function getWeatherUrl(lat, lng) {
  return `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${APIKEY}&units=metric`;
}

export function getCurrentLocation() {
  if ('geolocation' in navigator) {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => resolve({
          lat: latitude, lng: longitude,
        }),
        reject,
        options,
      )
    );
  }

  return Promise.reject(new Error('Geoposition is not supported!'));
}

class Weather {
  constructor(data) {
    this.city = data.name;
    this.country = data.sys.country;
    this.icon = `wi-owm-${data.weather[0].id}`;
    this.condition = data.weather[0].main;

    this.temp = data.main.temp;
    this.humidity = data.main.humidity;

    this.wind = data.wind.speed;
    if (data.wind.deg) {
      this.windDeg = Math.round(data.wind.deg);
      this.windIcon = `wi-wind towards-${this.windDeg}-deg`;
    }

    this.sunrise = data.sys.sunrise && moment(data.sys.sunrise, 'X').format('kk:mm');
    this.sunset = data.sys.sunset && moment(data.sys.sunset, 'X').format('kk:mm');

    this.date = data.dt && moment(data.dt, 'X').toDate();
    this.dateFormatted = data.dt && moment(data.dt, 'X').format('MMM D, kk:mm');
  }
}

class Forecast {
  constructor(data) {
    this.city = data.city.name;
    this.country = data.city.country;

    this.list = data.list.map(item => new Weather(item));
  }
}

export function getForecast(lat, lng) {
  return fetch(getForecastUrl(lat, lng))
    .then(res => res.json())
    .then(res => new Forecast(res));
}

export function getWeather(lat, lng) {
  return fetch(getWeatherUrl(lat, lng))
    .then(res => res.json())
    .then(res => new Weather(res));
}
