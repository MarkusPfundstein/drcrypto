import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { rootReducer } from '../components/Store';
import App from '../components/App';
import AppDelta from '../components/AppDelta';

const persistConfig = {
  key: 'drcrypto',
  storage,
  stateReconciler: autoMergeLevel2,
};

const reducer = persistReducer(persistConfig, rootReducer);
const store = createStore(reducer);
const persistor = persistStore(store);

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/delta" component={AppDelta} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default Root;

