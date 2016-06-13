export const GET_LOCATION = 'weather_now/location/GET_LOCATION';
export const GET_LOCATION_SUCCESS = 'weather_now/location/GET_LOCATION_SUCCESS';
export const GET_LOCATION_FAIL = 'weather_now/location/GET_LOCATION_FAIL';

const initialState = {
  loaded: false,
  loading: false,
  error: '',
  data: null,
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case GET_LOCATION:
      return {
        ...state,
        loading: true,
      };
    case GET_LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
      };
    case GET_LOCATION_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function getLocation() {
  return {
    type: GET_LOCATION,
  };
}


export function getLocationSuccess(result) {
  return {
    type: GET_LOCATION_SUCCESS,
    result,
  };
}


export function getLocationFail(error) {
  return {
    type: GET_LOCATION_FAIL,
    error,
  };
}
