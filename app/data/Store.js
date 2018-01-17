import { combineReducers } from 'redux';

/* some constants so that we don't have to use plain strings. React compiler will catch this */
export const ACTION_LOGIN = 'ACTION_LOGIN';
export const ACTION_LOGOUT = 'ACTION_LOGOUT';

/* initial state for the login store */
const initialLoginState = {
  loggedIn: false,
  token: null,
};

/* function that listens to actions that update the loginStore */
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

/* combine different stores. Right now we only have one store (loginReducer) */
export const rootReducer = combineReducers({ loginReducer });

/* functions thate create the action objects that Redux will pass to loginReducer */
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
