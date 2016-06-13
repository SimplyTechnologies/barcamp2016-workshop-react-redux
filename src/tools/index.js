import fetch from 'isomorphic-fetch';


const FORECAST_URL = 'https://api.forecast.io/forecast/d58fba1adea0aeb02b97114c5a520517/';

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

export function getForecast(lat, lng) {
  return fetch(`${FORECAST_URL}${lat},${lng}`)
    .then(res => res.json());
}
