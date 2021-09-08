import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import nodeReducer from './store/reducers/node';
import generalReducer from './store/reducers/generals';
import authReducer from './store/reducers/auth';
import saveReducer from './store/reducers/saveArt';
import getAllArtsReducer from './store/reducers/getAllArt';
import fetchArtReducer from './store/reducers/fetchArt';

const reducers = combineReducers({
  gnr: generalReducer,
  node: nodeReducer,
  auth: authReducer,
  save: saveReducer,
  getArts: getAllArtsReducer,
  fetchArt: fetchArtReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();