import { combineReducers } from 'redux';

export const ACTION_LOGIN = 'ACTION_LOGIN';
export const ACTION_LOGOUT = 'ACTION_LOGOUT';

const initialLoginState = {
  loggedIn: false,
  token: null,
};

const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case ACTION_LOGIN:
      return {
        loggedIn: true,
        token: action.token,
      };

    case ACTION_LOGOUT:
      return {
        loggedIn: false,
        token: null,
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({ loginReducer });

export const loginAction = (token) => {
  return {
    type: ACTION_LOGIN,
    token,
  };
};

export const logoutAction = () => {
  return {
    type: ACTION_LOGOUT,
  };
};
