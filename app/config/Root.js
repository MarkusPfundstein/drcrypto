import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { rootReducer } from '../data/Store';

import FirstPage from '../components/controllers/FirstPage';
import SecondPage from '../components/controllers/SecondPage';

/* configuration for persistent store */
const persistConfig = {
  key: 'drcrypto',
  storage,
  stateReconciler: autoMergeLevel2,
};

/* 'global' objects */
const reducer = persistReducer(persistConfig, rootReducer);
const store = createStore(reducer);
const persistor = persistStore(store);

const Root = () => {
  /* here we setup the basic app structure. Provider and PersistGate
   * should be outmost DOM components so that they are 'globally' available */
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={FirstPage} />
            <Route path="/second" component={SecondPage} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default Root;

