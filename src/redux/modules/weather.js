export const LOAD = 'weather_now/weather/LOAD';
export const LOAD_SUCCESS = 'weather_now/weather/LOAD_SUCCESS';
export const LOAD_FAIL = 'weather_now/weather/LOAD_FAIL';
export const RESET = 'weather_now/weather/RESET';

const initialState = {
  loaded: false,
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };
    case RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

export function load({ lat, lng }) {
  return {
    type: LOAD,
    payload: {
      lat,
      lng,
    },
  };
}


export function reset() {
  return {
    type: RESET,
  };
}
