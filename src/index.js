import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import createSagaMiddleware from 'redux-saga';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootSaga from './sagas';
import logger from "redux-logger";
import rootReducer from "./reducers"
import { composeWithDevTools } from "redux-devtools-extension";
import App from './App';
import './index.css';

// https://kyounghwan01.github.io/blog/React/redux/redux-saga
const sagaMiddleware = createSagaMiddleware();
const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware, logger));
const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
